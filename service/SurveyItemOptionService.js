'use strict';


/**
 * Add a new SurveyItemOption
 * Performed by a user when he wants to create a new SurveyItemOption
 *
 * surveyItemOption SurveyItemOption_1 SurveyItemOption object that needs to be added
 * returns surveyItemOption
 **/
exports.addSurveyItemOption = function(surveyItemOption) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 7,
  "type" : "type",
  "value" : "value",
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
 * Delete a SurveyItemOption by id
 * Performed by the user in order to delete the SurveyItemOption from the system
 *
 * id Integer The SurveyItemOption id
 * returns surveyItemOption
 **/
exports.deleteSurveyItemOption = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 7,
  "type" : "type",
  "value" : "value",
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
 * Get all SurveyItemOption
 * Performed by a user in order to get all SurveyItemOption
 *
 * returns List
 **/
exports.getAllSurveyItemOptions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 7,
  "type" : "type",
  "value" : "value",
  "labels" : [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a SurveyItemOption by the id
 * Performed by users in order to get specific SurveyItemOption
 *
 * id Integer The SurveyItemOption id
 * returns surveyItemOption
 **/
exports.getSurveyItemOption = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 7,
  "type" : "type",
  "value" : "value",
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
 * Update an existing SurveyItemOption
 * Performed by a user in order to update the SurveyItemOption
 *
 * id Integer The SurveyItemOption id
 * body Body_10 SurveyItemOption object that needs to be updated
 * returns surveyItemOption
 **/
exports.updateSurveyItemOption = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 7,
  "type" : "type",
  "value" : "value",
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

