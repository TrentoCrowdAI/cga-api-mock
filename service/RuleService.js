'use strict';


/**
 * Add a new Rule
 * Performed by a user when he wants to create a new Rule
 *
 * rule Rule_1 Rule object that needs to be added
 * returns rule
 **/
exports.addRule = function(rule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Rule by id
 * Performed by the user in order to delete the Rule from the system
 *
 * id Integer The Rule id
 * returns rule
 **/
exports.deleteRule = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Rules
 * Performed by a user in order to get all Rules
 *
 * returns List
 **/
exports.getAllRules = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
}, {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a Rule by the id
 * Performed by users in order to get specific Rule
 *
 * id Integer The Rule id
 * returns rule
 **/
exports.getRule = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing Rule
 * Performed by a user in order to update the Rule
 *
 * id Integer The Rule id
 * body Body_7 Rule object that needs to be updated
 * returns rule
 **/
exports.updateRule = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item" : 3,
  "condition" : "condition",
  "id" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

