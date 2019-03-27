'use strict';


/**
 * Add a new project
 * Performed by a user when he wants to create a new project
 *
 * project Project_1 Project object that needs to be added
 * returns project
 **/
exports.addProject = function(project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Project by id
 * Performed by the user in order to delete the Project from the system
 *
 * id Integer The Project id
 * returns project
 **/
exports.deleteProject = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an project by the id
 * Performed by users in order to get specific project
 *
 * id Integer The Project id
 * returns project
 **/
exports.getProject = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all project
 * Performed by a user in order to get all projects
 *
 * returns List
 **/
exports.getProjects = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
}, {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing project
 * Performed by a user in order to update the project
 *
 * id Integer The Project id
 * body Body Project object that needs to be updated
 * returns project
 **/
exports.updateProject = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : [ {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  }, {
    "name" : "name",
    "surveys" : [ {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    }, {
      "components" : [ {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      }, {
        "name" : "name",
        "id" : 5,
        "items" : [ {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        }, {
          "validators" : [ {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          }, {
            "id" : 2,
            "type" : "type",
            "value" : "value"
          } ],
          "options" : [ {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          }, {
            "id" : 7,
            "type" : "type",
            "value" : "value",
            "labels" : [ {
              "values" : "values",
              "language" : "language",
              "id" : 2
            }, {
              "values" : "values",
              "language" : "language",
              "id" : 2
            } ]
          } ],
          "description" : "description",
          "rules" : [ {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          }, {
            "item" : 3,
            "condition" : "condition",
            "id" : 9
          } ],
          "id" : 5,
          "type" : "type",
          "flowConstraints" : [ {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          }, {
            "typology" : "typology",
            "condition" : "condition",
            "id" : 4,
            "value" : "value"
          } ],
          "labels" : [ {
            "values" : "values",
            "language" : "language",
            "id" : 2
          }, {
            "values" : "values",
            "language" : "language",
            "id" : 2
          } ]
        } ]
      } ],
      "name" : "name",
      "description" : "description",
      "id" : 1
    } ],
    "description" : "description",
    "id" : 6
  } ],
  "subjects" : [ {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  }, {
    "role" : "role",
    "surname" : "surname",
    "name" : "name",
    "id" : 7,
    "email" : "email"
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

