'use strict';


/**
 * Add a new DataCollection
 * Performed by a user when he wants to create a new DataCollection
 *
 * dataCollection DataCollection_1 DataCollection object that needs to be added
 * returns dataCollection
 **/
exports.addDataCollection = function(dataCollection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a DataCollection by id
 * Performed by the user in order to delete the DataCollection from the system
 *
 * id Integer The DataCollection id
 * returns dataCollection
 **/
exports.deleteDataCollection = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all dataCollection
 * Performed by a user in order to get all dataCollections
 *
 * returns List
 **/
exports.getAllDataCollections = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an DataCollection by the id
 * Performed by users in order to get specific DataCollection
 *
 * id Integer The DataCollection id
 * returns dataCollection
 **/
exports.getDataCollection = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing dataCollection
 * Performed by a user in order to update the dataCollection
 *
 * id Integer The DataCollection id
 * body Body_1 Project object that needs to be updated
 * returns dataCollection
 **/
exports.updateDataCollection = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

