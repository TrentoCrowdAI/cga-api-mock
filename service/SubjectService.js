'use strict';


/**
 * Add a new subject
 * Operation to call in order to create a new Subject in the system
 *
 * subject Subject_1 Subject object that needs to be added
 * returns subject
 **/
exports.addSubject = function(subject) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Subject by id
 * Performed by the user in order to delete the Subject from the system
 *
 * id Integer The Subject id
 * returns subject
 **/
exports.deleteSubject = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all subject
 * Performed by a user in order to get all Subject
 *
 * returns List
 **/
exports.getAllSubjects = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
}, {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a Subject by the id
 * Performed by users in order to get specific Subject
 *
 * id Integer The Subject id
 * returns subject
 **/
exports.getSubject = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing Subject
 * Performed by a user in order to update the Subject
 *
 * id Integer The Subject id
 * body Body_11 Subject object that needs to be updated
 * returns subject
 **/
exports.updateSubject = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "surname" : "surname",
  "name" : "name",
  "id" : 7,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

