import { getFromPMID } from '../utils/PubmedAPI';
import { getFromDOI } from '../utils/CrossRefAPI';
import { generateID } from '../utils/HelperFunctions';
import { processDate } from '../utils/CSLFieldProcessors';

export function getRemoteData(identifierList: string, mce: TinyMCE.WindowManager): Promise<CSL.Data[]> {
    return new Promise((resolve, reject) => {
        const pmidList: string[] = [];
        const doiList: string[] = [];
        const identifiers = identifierList.replace(/\s/g, '');
        const promises: Promise<[CSL.Data[], string[]]>[] = [];

        identifiers.split(',').forEach(i => {
            if (i.search(/^10\./) > -1) {
                doiList.push(i);
                return;
            }
            pmidList.push(i);
        });

        if (pmidList.length) promises.push(getFromPMID(pmidList.join(',')));
        if (doiList.length) promises.push(getFromDOI(doiList));

        if (!promises.length) reject(new Error(`No identifiers could be found for your request.`));

        Promise.all(promises).then((data: [CSL.Data[], string[]][]) => {
            const errs: string[] = data.reduce((prev, curr) => {
                prev.push(...curr[1].filter(d => d));
                return prev;
            }, []);

            if (errs.length) mce.alert(`The following identifiers could not be found: ${errs.join(', ')}`);

            const combined: CSL.Data[] = data.reduce((prev, curr) => {
                prev.push(...curr[0]);
                return prev;
            }, []);
            combined.forEach(ref => {
                ref.id = generateID();
            });
            resolve(combined);
        }, (err: Error) => {
            reject(err);
        });
    });
};

export function parseManualData(payload: ABT.ReferenceWindowPayload): Promise<CSL.Data[]|Error> {
    return new Promise(resolve => {
        payload.people.forEach(person => {
            if (typeof payload.manualData[person.type] === 'undefined') {
                payload.manualData[person.type] = [{ family: person.family, given: person.given }];
                return;
            }
            payload.manualData[person.type].push({ family: person.family, given: person.given });
        });

        // Process date fields
        ['accessed', 'event-date', 'issued'].forEach(dateType => {
            payload.manualData[dateType] = processDate(payload.manualData[dateType], 'RIS');
        });

        // Create a unique ID
        payload.manualData.id = generateID();

        Object.keys(payload.manualData).forEach(key => {
            if (payload.manualData[key] === '') delete payload.manualData[key];
            if (['accessed', 'event-date', 'issued'].indexOf(key) > -1) {
                if (payload.manualData[key]['date-parts'][0].length === 0) delete payload.manualData[key];
            }
        });

        resolve([payload.manualData]);
    });
}
