'use strict';


/**
 * Add a new FlowConstraint
 * Performed by a user when he wants to create a new FlowConstraint
 *
 * flowConstraint FlowConstraint_1 FlowConstraint object that needs to be added
 * returns flowConstraint
 **/
exports.addFlowConstraint = function(flowConstraint) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a FlowConstraint by id
 * Performed by the user in order to delete the FlowConstraint from the system
 *
 * id Integer The FlowConstraint id
 * returns flowConstraint
 **/
exports.deleteFlowConstraint = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all FlowConstraints
 * Performed by a user in order to get all FlowConstraint
 *
 * returns List
 **/
exports.getAllFlowConstraints = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
}, {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a FlowConstraint by the id
 * Performed by users in order to get specific FlowConstraint
 *
 * id Integer The FlowConstraint id
 * returns flowConstraint
 **/
exports.getFlowConstraint = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing FlowConstraint
 * Performed by a user in order to update the FlowConstraint
 *
 * id Integer The FlowConstraint id
 * body Body_6 FlowConstraint object that needs to be updated
 * returns flowConstraint
 **/
exports.updateFlowConstraint = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "typology" : "typology",
  "condition" : "condition",
  "id" : 4,
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

