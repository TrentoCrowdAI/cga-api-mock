'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.addProject = function addProject (req, res, next) {
  var project = req.swagger.params['project'].value;
  Project.addProject(project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProject = function deleteProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Project.deleteProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProject = function getProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  Project.getProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjects = function getProjects (req, res, next) {
  Project.getProjects()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProject = function updateProject (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Project.updateProject(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
