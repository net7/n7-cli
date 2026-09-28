import { ConfigSearch } from "@n7-frontend/n7-muruca-middleware"

const searchConfig: ConfigSearch = {

	/** WORK **/
	"work": {
		"base_query": {
			"field": "record-type",
			"value": "work"
    },
		sort: {
			title: {
				field: "title.sort"
			}
		},
		"lang": {
			"query": {
				"type": "selection",
				"field": "language"
			}
		},
		"facets-aggs": {
			"type": "obj",
			"aggregations": {
				// Non nested
				"authors": {
					"nested": false,
					"search":"author.key.keyword",
					"title":"author.name.keyword"
				},
				// Ricerca nella select
				"places": {
					"nested": false,
					"innerFilterField": ["place.name"],
					"search":"place.key.keyword",
					"title":"place.name.keyword"
				},
				// Nested
				"alt_titles": {
					"nested": true,
					"nestedFields": ["alt_titles"],
					"search":"alt_titles.slug.keyword",
					"title":"alt_titles.title.keyword"
				},
			}
		},
		"filters": {
			"query": {
				"type": "fulltext",
				"field": [
					"title",
					"description"
				],
				"addStar": true
			},
			"authors": {
				"type": "multivalue",
				"field": "author.key.keyword",
				"operator": "AND"
			},
		}
	},

	/** BIBLIOGRAPHY **/
	"bibliography": {
		"base_query": {
			"field": "record-type",
			"value": "bibliography"
		},
		sort: {
			title: {
				field: "title.sort"
			}
		},
		"lang": {
			"query": {
				"type": "selection",
				"field": "language"
			}
		},
		"facets-aggs": {
			"type": "obj",
			"aggregations": {}
		},
		"filters": {
			"query": {
				"type": "fulltext",
				"field": [
					"description"
				],
				"addStar": true
			},
			"auth_query": {
				"type": "fulltext",
				"field": [
					"title"
				],
				"addStar": true
			}
		}
	},

	/** RESULTS FORMATTER **/
	"results": [
		{
			"label": "title",
			"field": "title"
		},
		{
			"label": "slug",
			"field": "slug"
		},
		{
			"label": "routeId",
			"field": "record-type"
		},
		{
			"label": "id",
			"field": "id"
		},
		{
			"label": "text",
			"field":  "",
			"max-char": 100	
		},
		{
			"label": "metadata",
			"field": [],
			"max-char": 100
		},
		{
			"label": "image",
			"field": "image"
		}
	]
}

export default searchConfig;