'use strict';

var utils = require('../utils/writer.js');
var Survey = require('../service/SurveyService');

module.exports.addSurvey = function addSurvey (req, res, next) {
  var survey = req.swagger.params['survey'].value;
  Survey.addSurvey(survey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSurvey = function deleteSurvey (req, res, next) {
  var id = req.swagger.params['id'].value;
  Survey.deleteSurvey(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurvey = function getSurvey (req, res, next) {
  var id = req.swagger.params['id'].value;
  Survey.getSurvey(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurveys = function getSurveys (req, res, next) {
  Survey.getSurveys()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSurvey = function updateSurvey (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Survey.updateSurvey(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
