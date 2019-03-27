'use strict';

var utils = require('../utils/writer.js');
var Subject = require('../service/SubjectService');

module.exports.addSubject = function addSubject (req, res, next) {
  var subject = req.swagger.params['subject'].value;
  Subject.addSubject(subject)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSubject = function deleteSubject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Subject.deleteSubject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSubjects = function getAllSubjects (req, res, next) {
  Subject.getAllSubjects()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubject = function getSubject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Subject.getSubject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSubject = function updateSubject (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Subject.updateSubject(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
