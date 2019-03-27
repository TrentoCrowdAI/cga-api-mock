'use strict';


/**
 * Add a new survey
 * Performed by a user when he wants to create a new survey in order to collect patient data
 *
 * survey Survey_1 Survey object that needs to be added
 * returns survey
 **/
exports.addSurvey = function(survey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a survey by id
 * Performed by the user in order to delete the survey from the system
 *
 * id Integer The survey id
 * returns survey
 **/
exports.deleteSurvey = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an survey by the id
 * Performed by users in order to get specific survey
 *
 * id Integer The survey id
 * returns survey
 **/
exports.getSurvey = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all survey
 * Performed by a user in order to get all surveys
 *
 * returns List
 **/
exports.getSurveys = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing survey
 * Performed by a user in order to update the survey
 *
 * id Integer The survey id
 * body Body_2 Survey object that needs to be updated
 * returns survey
 **/
exports.updateSurvey = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

