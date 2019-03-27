'use strict';


/**
 * Add a new SurveyImage
 * Performed by a user when he wants to create a new SurveyImage
 *
 * surveyImage SurveyImage SurveyImage object that needs to be added
 * returns surveyImage
 **/
exports.addSurveyImage = function(surveyImage) {
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
  "link" : "link",
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
  "id" : 0,
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
 * Delete a SurveyImage by id
 * Performed by the user in order to delete the SurveyImage from the system
 *
 * id Integer The SurveyImage id
 * returns surveyImage
 **/
exports.deleteSurveyImage = function(id) {
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
  "link" : "link",
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
  "id" : 0,
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
 * Get all SurveyImage
 * Performed by a user in order to get all SurveyImage
 *
 * returns List
 **/
exports.getAllSurveyImages = function() {
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
  "link" : "link",
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
  "id" : 0,
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
  "link" : "link",
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
  "id" : 0,
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
 * Performed by users in order to get specific SurveyImage
 *
 * id Integer The SurveyImage id
 * returns surveyImage
 **/
exports.getSurveyImage = function(id) {
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
  "link" : "link",
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
  "id" : 0,
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
 * Update an existing SurveyImage
 * Performed by a user in order to update the SurveyImage
 *
 * id Integer The SurveyImage id
 * body Body_5 SurveyImage object that needs to be updated
 * returns surveyImage
 **/
exports.updateSurveyImage = function(id,body) {
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
  "link" : "link",
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
  "id" : 0,
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

