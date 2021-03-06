// tslint:disable
export default {
  "referenceList": {
    "referenceList": {
      "tooltips": {
        "insert": "Insert selected references",
        "add": "Add reference to reference list",
        "remove": "Remove selected references from reference list",
        "pin": "Pin reference list to visible window"
      },
      "citedItems": "Cited Items",
      "uncitedItems": "Uncited Items"
    },
    "menu": {
      "tooltips": {
        "import": "Import references from RIS file",
        "refresh": "Refresh reference list",
        "destroy": "Delete all references",
        "help": "View usage instructions",
      },
      "stylePlaceholder": "Choose citation style..."
    }
  },
  "tinymce": {
    "importWindow": {
      "title": "Import References from RIS File",
      "filetypeError": "The file could not be processed. Are you sure it's a .RIS (Refman) file?",
      "leftovers": "The following references were unable to be processed:",
      "upload": "Choose File",
      "import": "Import"
    },
    "pubmedWindow": {
      "title": "Search PubMed for Reference",
      "search": "Search",
      "next": "Next",
      "previous": "Previous",
      "addReference": "Add Reference"
    },
    "referenceWindow": {
      "referenceWindow": {
        "title": "Insert Formatted Reference"
      },
      "people": {
        "add": "Add another",
        "surname": "Surname",
        "given": "Given Name, M.I."
      },
      "manualEntryContainer": {
        "type": "Select Citation Type"
      },
      "identifierInput": {
        "label": "PMID/DOI"
      },
      "buttonRow": {
        "pubmedWindowTitle": "Search PubMed for Reference",
        "addManually": "Add Manually",
        "addWithIdentifier": "Add with Identifier",
        "searchPubmed": "Search PubMed",
        "addReference": "Add Reference",
        "attachInline": "Attach Inline"
      }
    }
  },
  "peerReviewMetabox": {
    "peerReviewMetabox": {
      "optionText": [
        "Select Number of Reviewers",
        "One Reviewer",
        "Two Reviewers",
        "Three Reviewers"
      ],
      "review1": "Review 1",
      "review2": "Review 2",
      "review3": "Review 3",
      "mediaButton": "Use this image",
      "mediaTitle": "Choose or Upload an Image"
    },
    "reviewRow": {
      "reviewHeading": "Review Heading",
      "toggleResponse": "Toggle Author Response"
    },
    "commonRowContent": {
      "name": "Name",
      "twitter": "Twitter Handle",
      "background": "Background",
      "content": "Content",
      "photo": "Photo",
      "imageButton": "Choose or Upload an Image"
    }
  },
  "fieldmaps": {
    "bill": {
      "title": "Bill",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number",
          "label": "Bill Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Code Pages",
          "required": false,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (e.g. 100-200)"
        },
        {
          "value": "volume",
          "label": "Code Volume",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "section",
          "label": "Section",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Legislative Body",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Sponsor"
        }
      ]
    },
    "book": {
      "title": "Book",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "collection-title",
          "label": "Series Title",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "collection-number",
          "label": "Series Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "number-of-pages",
          "label": "# of Pages",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "volume",
          "label": "Volume",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "edition",
          "label": "Edition",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Publisher",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher-place",
          "label": "Publisher Location",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        },
        {
          "type": "collection-editor",
          "label": "Series Editor"
        },
        {
          "type": "translator",
          "label": "Translator"
        }
      ]
    },
    "chapter": {
      "title": "Book Section",
      "fields": [
        {
          "value": "title",
          "label": "Section Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Book Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "chapter-number",
          "label": "Chapter Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "collection-title",
          "label": "Series",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "collection-number",
          "label": "Series Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "volume",
          "label": "Volume",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number-of-volumes",
          "label": "# of Volumes",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "edition",
          "label": "Edition",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Publisher",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher-place",
          "label": "Publisher Location",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "ISBN",
          "label": "ISBN",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Section Author"
        },
        {
          "type": "container-author",
          "label": "Book Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        },
        {
          "type": "collection-editor",
          "label": "Series Editor"
        },
        {
          "type": "translator",
          "label": "Translator"
        }
      ]
    },
    "broadcast": {
      "title": "Broadcast",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": false,
          "pattern": ".*",
          "placeholder": "E.g. \"Chapter 1\""
        },
        {
          "value": "container-title",
          "label": "Program Title",
          "required": true,
          "pattern": ".*",
          "placeholder": "E.g. \"House of Cards\""
        },
        {
          "value": "number",
          "label": "Episode Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "medium",
          "label": "Format",
          "required": false,
          "pattern": ".*",
          "placeholder": "E.g. \"Television\""
        },
        {
          "value": "publisher",
          "label": "Network",
          "required": true,
          "pattern": ".*",
          "placeholder": "E.g. \"Netflix\""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Producer"
        },
        {
          "type": "director",
          "label": "Director"
        }
      ]
    },
    "legal_case": {
      "title": "Case",
      "fields": [
        {
          "value": "title",
          "label": "Case Name",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "authority",
          "label": "Court",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number",
          "label": "Docket Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        }
      ]
    },
    "paper-conference": {
      "title": "Conference Proceeding",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "event",
          "label": "Conference Name",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher-place",
          "label": "Conference Location",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        },
        {
          "type": "collection-editor",
          "label": "Series Editor"
        },
        {
          "type": "translator",
          "label": "Translator"
        }
      ]
    },
    "entry-encyclopedia": {
      "title": "Encyclopedia Entry",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Encyclopedia Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "collection-title",
          "label": "Series",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "collection-number",
          "label": "Series Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "volume",
          "label": "Volume",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "number-of-volumes",
          "label": "# of Volumes",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "edition",
          "label": "Edition",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Publisher",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher-place",
          "label": "Publisher Location",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        },
        {
          "type": "collection-editor",
          "label": "Series Editor"
        },
        {
          "type": "translator",
          "label": "Translator"
        }
      ]
    },
    "motion_picture": {
      "title": "Film",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Distributor",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "genre",
          "label": "Genre",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "language",
          "label": "Language",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "medium",
          "label": "Format",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Scriptwriter"
        },
        {
          "type": "director",
          "label": "Director"
        },
        {
          "type": "editor",
          "label": "Producer"
        }
      ]
    },
    "speech": {
      "title": "Presentation",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "event",
          "label": "Event Name",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "event-place",
          "label": "Event Location",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "language",
          "label": "Language",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Presenter"
        }
      ]
    },
    "article-journal": {
      "title": "Journal Article",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Journal",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "journalAbbreviation",
          "label": "Journal Abbreviation",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "volume",
          "label": "Volume",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "issue",
          "label": "Issue",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "DOI",
          "label": "DOI",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "URL",
          "label": "URL",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        }
      ]
    },
    "article-magazine": {
      "title": "Magazine Article",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Magazine",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "volume",
          "label": "Volume",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "issue",
          "label": "Issue",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "ISSN",
          "label": "ISSN",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "URL",
          "label": "URL",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        }
      ]
    },
    "article-newspaper": {
      "title": "Newspaper Article",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Publication",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "section",
          "label": "Section",
          "required": false,
          "pattern": ".*",
          "placeholder": "E.g. \"Sports\", \"Politics\""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "issue",
          "label": "Issue",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "URL",
          "label": "URL",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "editor",
          "label": "Editor"
        }
      ]
    },
    "patent": {
      "title": "Patent",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number",
          "label": "Number",
          "required": true,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "jurisdiction",
          "label": "Jurisdiction",
          "required": true,
          "pattern": ".*",
          "placeholder": "E.g. \"United States\""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "publisher",
          "label": "Issuer",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Inventor"
        }
      ]
    },
    "report": {
      "title": "Report",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number",
          "label": "Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "collection-title",
          "label": "Series",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Publication",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "Publisher",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "URL",
          "label": "URL",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        },
        {
          "type": "collection-editor",
          "label": "Series Editor"
        },
        {
          "type": "translator",
          "label": "Translator"
        }
      ]
    },
    "legislation": {
      "title": "Statute",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number",
          "label": "Statute Number",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "section",
          "label": "Section",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "page",
          "label": "Pages",
          "required": true,
          "pattern": "^[0-9]+-?[0-9]*$",
          "placeholder": "Number or Range of Numbers (100-200)"
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        }
      ]
    },
    "thesis": {
      "title": "Thesis",
      "fields": [
        {
          "value": "title",
          "label": "Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "number-of-pages",
          "label": "# of Pages",
          "required": false,
          "pattern": "[0-9]+",
          "placeholder": ""
        },
        {
          "value": "publisher",
          "label": "University",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "publisher-place",
          "label": "Location",
          "required": false,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        }
      ]
    },
    "webpage": {
      "title": "Web Page",
      "fields": [
        {
          "value": "title",
          "label": "Content Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "container-title",
          "label": "Website Title",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "URL",
          "label": "URL",
          "required": true,
          "pattern": ".*",
          "placeholder": ""
        },
        {
          "value": "issued",
          "label": "Date",
          "required": true,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        },
        {
          "value": "accessed",
          "label": "Date Accessed",
          "required": false,
          "pattern": "[0-9]{4}(\\/[0-9]{2})?(\\/[0-9]{2})?(?!\\/)$",
          "placeholder": "YYYY/MM/DD or YYYY/MM or YYYY"
        }
      ],
      "people": [
        {
          "type": "author",
          "label": "Author"
        }
      ]
    }
  },
  "citationTypes": [
    {
      "label": "Bill",
      "value": "bill",
      "inUse": true
    },
    {
      "label": "Book",
      "value": "book",
      "inUse": true
    },
    {
      "label": "Book Section",
      "value": "chapter",
      "inUse": true
    },
    {
      "label": "Case",
      "value": "legal_case",
      "inUse": true
    },
    {
      "label": "Conference Proceeding",
      "value": "paper-conference",
      "inUse": true
    },
    {
      "label": "Encyclopedia Entry",
      "value": "entry-encyclopedia",
      "inUse": true
    },
    {
      "label": "Film",
      "value": "motion_picture",
      "inUse": true
    },
    {
      "label": "Hearing",
      "value": "speech",
      "inUse": true
    },
    {
      "label": "Journal Article",
      "value": "article-journal",
      "inUse": true
    },
    {
      "label": "Magazine Article",
      "value": "article-magazine",
      "inUse": true
    },
    {
      "label": "Newspaper Article",
      "value": "article-newspaper",
      "inUse": true
    },
    {
      "label": "Patent",
      "value": "patent",
      "inUse": true
    },
    {
      "label": "Report",
      "value": "report",
      "inUse": true
    },
    {
      "label": "Statute",
      "value": "legislation",
      "inUse": true
    },
    {
      "label": "Thesis",
      "value": "thesis",
      "inUse": true
    },
    {
      "label": "Television Broadcast",
      "value": "broadcast",
      "inUse": true
    },
    {
      "label": "Web Page",
      "value": "webpage",
      "inUse": true
    },
    {
      "label": "Test not in use",
      "value": "testing",
      "inUse": false
    }
  ]
};
