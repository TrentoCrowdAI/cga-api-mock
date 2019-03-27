'use strict';

var utils = require('../utils/writer.js');
var SurveyComponent = require('../service/SurveyComponentService');

module.exports.addSurveyComponent = function addSurveyComponent (req, res, next) {
  var surveyComponent = req.swagger.params['SurveyComponent'].value;
  SurveyComponent.addSurveyComponent(surveyComponent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSurveyComponent = function deleteSurveyComponent (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyComponent.deleteSurveyComponent(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSurveyComponents = function getAllSurveyComponents (req, res, next) {
  SurveyComponent.getAllSurveyComponents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurveyComponent = function getSurveyComponent (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyComponent.getSurveyComponent(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSurveyComponent = function updateSurveyComponent (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  SurveyComponent.updateSurveyComponent(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
