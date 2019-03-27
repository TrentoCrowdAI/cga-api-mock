'use strict';


/**
 * Add a new ValidatorItem
 * Operation to call in order to create a new ValidatorItem in the system
 *
 * validatorItem ValidatorItem_1 ValidatorItem object that needs to be added
 * returns validatorItem
 **/
exports.addValidatorItem = function(validatorItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 2,
  "type" : "type",
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
 * Delete a ValidatorItem by id
 * Performed by the user in order to delete the ValidatorItem from the system
 *
 * id Integer The ValidatorItem id
 * returns validatorItem
 **/
exports.deleteValidatorItem = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 2,
  "type" : "type",
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
 * Get all validatorItem
 * Performed by a user in order to get all ValidatorItem
 *
 * returns List
 **/
exports.getAllValidatorItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 2,
  "type" : "type",
  "value" : "value"
}, {
  "id" : 2,
  "type" : "type",
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
 * Get a ValidatorItem by the id
 * Performed by users in order to get specific ValidatorItem
 *
 * id Integer The ValidatorItem id
 * returns validatorItem
 **/
exports.getValidatorItem = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 2,
  "type" : "type",
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
 * Update an existing ValidatorItem
 * Performed by a user in order to update the ValidatorItem
 *
 * id Integer The ValidatorItem id
 * body Body_8 Subject object that needs to be updated
 * returns validatorItem
 **/
exports.updateValidatorItem = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 2,
  "type" : "type",
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

