import * as React from 'react';
import { EVENTS } from '../../utils/Constants';
import * as MCE from '../../utils/TinymceFunctions';
import { CSLProcessor } from '../../utils/CSLProcessor';
import { observable, IObservableArray } from 'mobx';
import { observer } from 'mobx-react';
import { getRemoteData, parseManualData } from '../API';
import * as CSSTransitionGroup from 'react-addons-css-transition-group';
// import DevTools from 'mobx-react-devtools';

import { Store } from '../Store';
import { Menu } from './Menu';
import { PanelButton } from './PanelButton';
import { ItemList } from './ItemList';

declare const tinyMCE: TinyMCE.MCE;
declare const ABT_i18n: BackendGlobals.ABT_i18n;
const { OPEN_REFERENCE_WINDOW, TINYMCE_READY } = EVENTS;

@observer
export class ReferenceList extends React.Component<{store: Store}, {}> {

    editor: TinyMCE.Editor;
    processor: CSLProcessor;
    labels = ABT_i18n.referenceList.referenceList;

    @observable
    selected: IObservableArray<string> = observable([]);

    @observable
    loading = true;

    @observable
    menuOpen = false;

    @observable
    fixed = false;

    @observable
    citedListUI = {
        isOpen: true,
        maxHeight: '400px',
    };

    @observable
    uncitedListUI = {
        isOpen: false,
        maxHeight: '400px',
    };

    constructor(props) {
        super(props);
        this.processor = new CSLProcessor(this.props.store);
        this.insertInline = this.insertInline.bind(this);
        this.openReferenceWindow = this.openReferenceWindow.bind(this);
        this.deleteCitations = this.deleteCitations.bind(this);
    }

    componentDidMount() {
        addEventListener(TINYMCE_READY, this.initTinyMCE);
        addEventListener(OPEN_REFERENCE_WINDOW, this.openReferenceWindow.bind(this));
        addEventListener('scroll', this.scrollHandler);
    }

    initProcessor() {
        this.editor.setProgressState(true);
        return this.processor.init()
        .then((clusters) => {
            MCE.parseInlineCitations(
                this.editor,
                clusters,
                this.props.store.citations.citationByIndex,
                this.processor.citeproc.opt.xclass
            ).then(() => {
                MCE.setBibliography(
                    this.editor,
                    this.processor.makeBibliography(this.props.store.links),
                    this.props.store.bibOptions
                );
                this.editor.setProgressState(false);
            });
            this.clearSelection();
        });
    }

    insertInline(e?: React.MouseEvent<HTMLAnchorElement>, data?: CSL.Data[]) {

        if (e) e.preventDefault();
        this.editor.setProgressState(true);

        /**
         * If no data, then this must be a case where we're inserting from the
         *   list selection.
         */
        if (!data || data.length === 0) {
            data = [];
            this.selected.forEach(id => {
                data.push(this.props.store.citations.CSL.get(id));
            });
        }

        const { locations: [citationsBefore, citationsAfter], currentIndex } =
            MCE.getRelativeCitationPositions(this.editor);
        const citationData = this.processor.prepareInlineCitationData(data, currentIndex);
        const clusters = this.processor.processCitationCluster(citationData, citationsBefore, citationsAfter);

        MCE.parseInlineCitations(
            this.editor,
            clusters,
            this.props.store.citations.citationByIndex,
            this.processor.citeproc.opt.xclass,
        ).then(() => {
            MCE.setBibliography(
                this.editor,
                this.processor.makeBibliography(this.props.store.links),
                this.props.store.bibOptions
            );
            this.editor.setProgressState(false);
        });

        this.clearSelection();
    }

    deleteCitations(e?: React.MouseEvent<HTMLAnchorElement>) {
        if (e) e.preventDefault();
        if (this.selected.length === 0) return;
        this.editor.setProgressState(true);
        this.props.store.citations.removeItems(this.selected, this.editor.dom.doc);
        this.clearSelection();
        this.initProcessor();
    }

    openReferenceWindow(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        MCE.referenceWindow(this.editor).then(payload => {
            if (!payload) return;

            let preprocess: Promise<CSL.Data[]> = payload.addManually
                ? parseManualData(payload)
                : getRemoteData(payload.identifierList, this.editor.windowManager);

            preprocess.then((data) => {

                this.props.store.citations.CSL.merge(
                    data.reduce((prev, curr) => {
                        prev[curr.id] = curr;
                        return prev;
                    }, {} as {[itemId: string]: CSL.Data})
                );

                data = data.reduce((prev, curr) => {
                    const index = this.props.store.citations.lookup.titles.indexOf(curr.title);
                    if (index > -1) {
                        return [
                            ...prev,
                            this.props.store.citations.CSL.get(
                                this.props.store.citations.lookup.ids[index]
                            ),
                        ];
                    }
                    return [...prev, curr];
                }, []);
                if (!payload.attachInline) return;
                this.insertInline(null, data);
            })
            .catch(err => {
                console.error(err.message);
                this.editor.windowManager.alert(err.message);
            });
        });
    }

    openImportWindow() {
        MCE.importWindow(this.editor).then(data => {
            if (!data) return;
            this.props.store.citations.CSL.merge(
                data.payload.reduce((prev, curr) => {
                    prev[curr[0]] = curr[1];
                    return prev;
                }, {} as {[itemId: string]: CSL.Data})
            );
        });
    }

    clearSelection = () => {
        this.selected.clear();
    }

    handleMenuSelection = (kind: string, data: string) => {
        this.menuOpen = false;
        switch (kind) {
            case 'CHANGE_STYLE':
                this.props.store.citationStyle = data;
                this.initProcessor();
                return;
            case 'IMPORT_RIS':
                this.openImportWindow();
                return;
            case 'REFRESH_PROCESSOR':
                this.initProcessor();
                return;
            case 'DESTROY_PROCESSOR': {
                this.reset();
                return;
            }
            default:
                return;
        }
    }

    initTinyMCE = () => {
        this.editor = tinyMCE.activeEditor;
        this.initProcessor().then(() => this.loading = !this.loading);
    }

    listToggle = (id: string, explode: boolean = false) => {
        switch (id) {
            case 'cited':
                if (explode) {
                    this.citedListUI.isOpen = true;
                    this.uncitedListUI.isOpen = false;
                    break;
                }
                this.citedListUI.isOpen = !this.citedListUI.isOpen;
                break;
            case 'uncited':
                if (explode) {
                    this.citedListUI.isOpen = false;
                    this.uncitedListUI.isOpen = true;
                    break;
                }
                this.uncitedListUI.isOpen = !this.uncitedListUI.isOpen;
                break;
            default:
                break;
        }
        // Required so that the DOM has enough time to apply changes
        setTimeout(this.scrollHandler, 200);
    }

    pinReferenceList = (e) => {
        e.preventDefault();
        document.getElementById('abt_reflist').classList.toggle('fixed');
        this.fixed = !this.fixed;
        this.scrollHandler();
    }

    reset = () => {
        this.editor.setProgressState(true);
        this.clearSelection();
        this.uncitedListUI.isOpen = false;
        this.citedListUI.isOpen = true;
        this.props.store.reset();
        MCE.reset(this.editor.dom.doc);
        this.initProcessor();
    }

    scrollHandler = () => {
        const list = document.getElementById('abt_reflist');

        if (!this.fixed) {
            this.citedListUI.maxHeight = '400px';
            this.uncitedListUI.maxHeight = '400px';
            list.style.top = '';
            return;
        }

        const bothOpen: boolean =
            this.citedListUI.isOpen
            && this.uncitedListUI.isOpen
            && this.props.store.cited.length > 0
            && this.props.store.uncited.length > 0;

        const scrollpos = document.body.scrollTop;
        const topOffset = scrollpos > 134 ? 55 : (scrollpos === 0 ? 98 : 98 - (scrollpos / 3));
        const listOffset = (200 + topOffset);
        const remainingHeight = window.innerHeight - listOffset;

        list.style.top = `${topOffset}px`;
        if (!bothOpen) {
            this.citedListUI.maxHeight = `calc(100vh - ${listOffset}px)`;
            this.uncitedListUI.maxHeight = `calc(100vh - ${listOffset}px)`;
            return;
        }

        const cited = document.getElementById('cited');
        const uncited = document.getElementById('uncited');
        let citedHeight = 0;
        let uncitedHeight = 0;

        for (let i = 0; i < cited.children.length; i++) {
            citedHeight += cited.children[0].clientHeight + 1;
            if (citedHeight > (remainingHeight / 2)) {
                citedHeight = remainingHeight / 2;
                break;
            }
        }

        for (let i = 0; i < uncited.children.length; i++) {
            uncitedHeight += uncited.children[0].clientHeight + 1;
            if (uncitedHeight > (remainingHeight / 2)) {
                uncitedHeight = remainingHeight / 2;
                break;
            }
        }

        const allocatedHeight = citedHeight + uncitedHeight;

        if (allocatedHeight < remainingHeight) {
            if (citedHeight > uncitedHeight) {
                citedHeight += remainingHeight - allocatedHeight;
            }
            else {
                uncitedHeight += remainingHeight - allocatedHeight;
            }
        }

        this.citedListUI.maxHeight = `${citedHeight}px`;
        this.uncitedListUI.maxHeight = `${uncitedHeight}px`;
    }

    toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.menuOpen = !this.menuOpen;
    }

    toggleSelect = (id: string, isSelected: boolean) => {
        return isSelected
        ? this.selected.remove(id)
        : this.selected.push(id);
    }

    render() {

        if (this.loading) {
            return(
                <div id="abt-loading">
                    <div className="sk-circle">
                        {
                            [...Array(13).keys()].map(k => k !== 0 ?
                                <div key={k} className={`sk-circle${k} sk-child`} /> :
                                null
                            )
                        }
                    </div>
                </div>
            );
        }

        return (
            <div>
                {/* <DevTools position={{left: 50, top: 40}} /> */}
                <StorageField store={this.props.store} />
                <div className="panel">
                    <PanelButton
                        disabled={this.selected.length === 0}
                        onClick={this.insertInline}
                        data-tooltip={this.labels.tooltips.insert}
                    >
                        <span className="dashicons dashicons-migrate insert-inline" />
                    </PanelButton>
                    <PanelButton
                        disabled={this.selected.length !== 0}
                        onClick={this.openReferenceWindow}
                        data-tooltip={this.labels.tooltips.add}
                    >
                        <span className="dashicons dashicons-plus add-reference" />
                    </PanelButton>
                    <PanelButton
                        disabled={this.selected.length === 0}
                        onClick={this.deleteCitations}
                        data-tooltip={this.labels.tooltips.remove}
                    >
                        <span className="dashicons dashicons-minus remove-reference" />
                    </PanelButton>
                    <PanelButton
                        onClick={this.pinReferenceList}
                        data-tooltip={this.labels.tooltips.pin}
                    >
                        <span
                            className={
                                this.fixed
                                ? 'dashicons dashicons-admin-post pin-reflist fixed'
                                : 'dashicons dashicons-admin-post pin-reflist'
                            }
                        />
                    </PanelButton>
                    <PanelButton onClick={this.toggleMenu}>
                        <span
                            className={
                                this.menuOpen
                                ? 'dashicons dashicons-no-alt hamburger-menu open'
                                : 'dashicons dashicons-menu hamburger-menu'
                            }
                        />
                    </PanelButton>
                </div>
                <CSSTransitionGroup
                    transitionName="menu"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                >
                    { this.menuOpen &&
                        <Menu
                            key="menu"
                            cslStyle={this.props.store.citationStyle}
                            submitData={this.handleMenuSelection}
                        />
                    }
                </CSSTransitionGroup>
                { this.props.store.cited.length > 0 &&
                    <ItemList
                        id="cited"
                        items={this.props.store.cited}
                        selectedItems={this.selected}
                        isOpen={this.citedListUI.isOpen}
                        maxHeight={this.citedListUI.maxHeight}
                        toggle={this.listToggle}
                        click={this.toggleSelect}
                        children={this.labels.citedItems}
                    />
                }
                { this.props.store.uncited.length > 0 &&
                    <ItemList
                        id="uncited"
                        items={this.props.store.uncited}
                        selectedItems={this.selected}
                        isOpen={this.uncitedListUI.isOpen}
                        maxHeight={this.uncitedListUI.maxHeight}
                        toggle={this.listToggle}
                        click={this.toggleSelect}
                        children={this.labels.uncitedItems}
                    />
                }
            </div>
        );
    }
}

@observer
class StorageField extends React.Component<{store: Store}, {}> {
    render() {
        return (
            <input
                type="hidden"
                name="abt-reflist-state"
                value={this.props.store.persistent}
            />
        );
    }
}
