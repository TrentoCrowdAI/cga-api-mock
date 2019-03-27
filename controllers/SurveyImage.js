'use strict';

var utils = require('../utils/writer.js');
var SurveyImage = require('../service/SurveyImageService');

module.exports.addSurveyImage = function addSurveyImage (req, res, next) {
  var surveyImage = req.swagger.params['SurveyImage'].value;
  SurveyImage.addSurveyImage(surveyImage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSurveyImage = function deleteSurveyImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyImage.deleteSurveyImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSurveyImages = function getAllSurveyImages (req, res, next) {
  SurveyImage.getAllSurveyImages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSurveyImage = function getSurveyImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  SurveyImage.getSurveyImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSurveyImage = function updateSurveyImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  SurveyImage.updateSurveyImage(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
