'use strict';


/**
 * Add a new Label
 * Performed by a user when he wants to create a new Label
 *
 * label Label Label object that needs to be added
 * returns label
 **/
exports.addLabel = function(label) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "values" : "values",
  "language" : "language",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Label by id
 * Performed by the user in order to delete the Label from the system
 *
 * id Integer The Label id
 * returns label
 **/
exports.deleteLabel = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "values" : "values",
  "language" : "language",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all label
 * Performed by a user in order to get all Label
 *
 * returns List
 **/
exports.getAllLabels = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "values" : "values",
  "language" : "language",
  "id" : 2
}, {
  "values" : "values",
  "language" : "language",
  "id" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a Label by the id
 * Performed by users in order to get specific Label
 *
 * id Integer The Label id
 * returns label
 **/
exports.getLabel = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "values" : "values",
  "language" : "language",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing Label
 * Performed by a user in order to update the Label
 *
 * id Integer The Label id
 * body Body_9 Label object that needs to be updated
 * returns label
 **/
exports.updateLabel = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "values" : "values",
  "language" : "language",
  "id" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

