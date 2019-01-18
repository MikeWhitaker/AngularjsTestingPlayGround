describe('ombd service', function () {
	var serviceData = {
    "glossary": {
        "title": "example glossary",
				"GlossDiv": {
            "title": "S",
						"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
										"SortAs": "SGML",
										"GlossTerm": "Standard Generalized Markup Language",
										"Acronym": "SGML",
										"Abbrev": "ISO 8879:1986",
										"GlossDef": {
          					   	"para": "A meta-markup language, used to create markup languages such as DocBook.",
												"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
	};

	it('should return GlossEntry data', function () {
		var service = {
				getGlossTerm: function (){
									return serviceData.glossary.GlossDiv.GlossList.GlossEntry.GlossTerm;
				}
			};	
		expect(service.getGlossTerm()).toEqual("Standard Generalized Markup Language");
	});
});