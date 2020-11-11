export default {
    "title": {
        "type": "string",
        "fields": [
            "title"
        ]
    },
    "header": {
        "type": "obj",
        "fields": [
            "title",
            "description"
        ]
    },
    "metadata": {
        "type": "obj",
        "fields": [
            "editor",
            "editor_source",
        ]
    },

    "metadata-datos-bibliograficos": {
        "type": "obj",
        "fields": [
            "author",
            "type",
            "date",
            "date_note",
            "collocation",
            "signature",
            "source",
            "note",
            "censors_licenses", //repeater
            "troupe",
            "troupe_note",
            "facsimile",
        ]
    },

    "metadata-datos-codicologicos": {
        "type": "obj",
        "fields": [
            "conservation",
            "phisical_description",
            "cover_page",
            "dramatis_personae",
            "ph_desc_signature",
            "ph_desc_date",
            "other_hand",
            "analytics_description",
            "manuscript_characteristics",
        ]
    },

    "metadata-proceso-composicion": {
        "type": "obj",
        "fields": [
            "is_draft",
            "first_writing",
            "revisions",
            "is_revision_marginalia",
            "revision_marginalia",
            "external_intervention_company",
            "external_intervention_censor",
            "external_intervention_other",
            "is_deleted_fragments",
            "deleted_fragments"
        ]
    },
    
    "collection-bibliografia-citada": {
        "type": "obj",
        "fields": [
            "bibliografia",
        ]
    },
    
    "breadcrumbs": {
        "type": "obj",
        "fields": [
          "breadcrumbs"
        ]
    }
    
}