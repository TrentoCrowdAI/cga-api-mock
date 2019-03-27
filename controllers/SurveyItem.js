'use strict';

var utils = require('../utils/writer.js');
var SurveyItem = require('../service/SurveyItemService');

module.exports.addSurveyItem = function addSurveyItem (req, res, next) {
  var surveyItem = req.swagger.params['SurveyItem'].value;
  SurveyItem.addSurveyItem(surveyItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSurveyItem = function deleteSurveyItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyItem.deleteSurveyItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSurveyItems = function getAllSurveyItems (req, res, next) {
  SurveyItem.getAllSurveyItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurveyItem = function getSurveyItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyItem.getSurveyItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSurveyItem = function updateSurveyItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  SurveyItem.updateSurveyItem(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
