'use strict';

var utils = require('../utils/writer.js');
var SurveyItemOption = require('../service/SurveyItemOptionService');

module.exports.addSurveyItemOption = function addSurveyItemOption (req, res, next) {
  var surveyItemOption = req.swagger.params['surveyItemOption'].value;
  SurveyItemOption.addSurveyItemOption(surveyItemOption)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSurveyItemOption = function deleteSurveyItemOption (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyItemOption.deleteSurveyItemOption(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSurveyItemOptions = function getAllSurveyItemOptions (req, res, next) {
  SurveyItemOption.getAllSurveyItemOptions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurveyItemOption = function getSurveyItemOption (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyItemOption.getSurveyItemOption(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSurveyItemOption = function updateSurveyItemOption (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  SurveyItemOption.updateSurveyItemOption(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
