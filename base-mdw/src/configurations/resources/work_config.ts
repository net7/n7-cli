export default {
    "title": {
        "type": "title",
        "fields": [
            "title"
        ]
    },
    "header": {
        "type": "header",
        "fields": [
            "title",
            "description"
        ]
    },
    "editor_metadata": {
        "type": "metadata",
        "fields": [
            "editor",
        ]
    }, 
    "breadcrumbs": {
        "type": "breadcrumb",
        "fields": [
          "breadcrumbs"
        ]
    },
    "tab-bar": {
        "type": "tabs",
        "tabs": [
            {
                "id": 'tab_id',
                'fields': ['check_field']
            },
        ],
    },
    "metadata": {
        "type": "metadata",
        "fields": [
            "editor",
            "editor_source",
        ]
    },
    "collection": {
        "type": "collection",
        "fields": [
            "witnesses",
        ]
    },
    "collection-bibliography": {
        "type": "bibliography",
        "fields": [
            "bibliography"
        ]
    },
     "text-viewer": {
        "type": "text-viewer",
        "field": "transcription"
    },
    "image-viewer-iiif": {
        "type" : "image-viewer-iiif",
        "excludePDF": true,
        "fields": [
            "riproduzione_iiif"
        ]
    },
}