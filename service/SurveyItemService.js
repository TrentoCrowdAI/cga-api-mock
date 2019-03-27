'use strict';


/**
 * Add a new SurveyItem
 * Performed by a user when he wants to create a new SurveyItem
 *
 * surveyItem SurveyItem SurveyItem object that needs to be added
 * returns surveyItem
 **/
exports.addSurveyItem = function(surveyItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * id Integer The SurveyItem id
 * returns surveyItem
 **/
exports.deleteSurveyItem = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all surveyItem
 * Performed by a user in order to get all surveyItem
 *
 * returns List
 **/
exports.getAllSurveyItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a SurveyItem by the id
 * Performed by users in order to get specific SurveyItem
 *
 * id Integer The SurveyItem id
 * returns surveyItem
 **/
exports.getSurveyItem = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing SurveyItem
 * Performed by a user in order to update the surveyItem
 *
 * id Integer The SurveyItem id
 * body Body_4 SurveyItem object that needs to be updated
 * returns surveyItem
 **/
exports.updateSurveyItem = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

