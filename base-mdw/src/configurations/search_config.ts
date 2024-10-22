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
				"types": {
					"nested": false,
					"search":"taxonomies.type.key.keyword",
					"title":"taxonomies.type.name.keyword"
				},
				"collocations": {
					"nested": false,
					"search":"taxonomies.collocation.key.keyword",
					"title":"taxonomies.collocation.name.keyword"
				},
				"authors": {
					"nested": false,
					"search":"taxonomies.author.key.keyword",
					"title":"taxonomies.author.name.keyword"
				},
				"dates": {
					"nested": false,
					"search":"date.range.keyword",
					"title":"date.range.keyword"
				}
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
			"types": {
				"type": "multivalue",
				"field": "taxonomies.type.key.keyword",
				"operator": "AND"
			},
			"authors": {
				"type": "multivalue",
				"field": "taxonomies.author.key.keyword",
				"operator": "AND"
			},
			"collocations": {
				"type": "multivalue",
				"field": "taxonomies.collocation.key.keyword",
				"operator": "AND"
			},
			"dates": {
				"type": "multivalue",
				"field": "date.range.keyword",
				"operator": "AND"
			}
		}
	},

	/** BIBLIOGRAPHY **/
	// "bibliography": {
	// 	"base_query": {
	// 		"field": "record-type",
	// 		"value": "bibliography"
	// 	},
	// 	"lang": {
	// 		"query": {
	// 			"type": "selection",
	// 			"field": "language"
	// 		}
	// 	},
	// 	"facets-aggs": {
	// 		"type": "obj",
	// 		"aggregations": {}
	// 	},
	// 	"filters": {
	// 		"query": {
	// 			"type": "fulltext",
	// 			"field": [
	// 				"description"
	// 			],
	// 			"addStar": true
	// 		},
	// 		"auth_query": {
	// 			"type": "fulltext",
	// 			"field": [
	// 				"title"
	// 			],
	// 			"addStar": true
	// 		}
	// 	}
	// },

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
			"field":  "description",
			"max-char": 100	
		},
		{
			"label": "metadata",
			"field": ["author", "type"],
			"max-char": 100
		},
		{
			"label": "image",
			"field": "image"
		}
	]
}

export default searchConfig;