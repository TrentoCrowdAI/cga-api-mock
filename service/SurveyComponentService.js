'use strict';


/**
 * Add a new SurveyComponent
 * Performed by a user when he wants to create a new surveyComponent in order to collect patient data
 *
 * surveyComponent SurveyComponent SurveyComponent object that needs to be added
 * returns surveyComponent
 **/
exports.addSurveyComponent = function(surveyComponent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a SurveyItem by id
 * Performed by the user in order to delete the SurveyItem from the system
 *
 * id Integer The SurveyComponent id
 * returns surveyComponent
 **/
exports.deleteSurveyComponent = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all surveyComponent
 * Performed by a user in order to get all surveyComponent
 *
 * returns List
 **/
exports.getAllSurveyComponents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a SurveyComponent by the id
 * Performed by users in order to get specific SurveyComponent
 *
 * id Integer The SurveyComponent id
 * returns surveyComponent
 **/
exports.getSurveyComponent = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing SurveyComponent
 * Performed by a user in order to update the surveyComponent
 *
 * id Integer The SurveyComponent id
 * body Body_3 SurveyComponent object that needs to be updated
 * returns surveyComponent
 **/
exports.updateSurveyComponent = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

