'use strict';

var utils = require('../utils/writer.js');
var Label = require('../service/LabelService');

module.exports.addLabel = function addLabel (req, res, next) {
  var label = req.swagger.params['Label'].value;
  Label.addLabel(label)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLabel = function deleteLabel (req, res, next) {
  var id = req.swagger.params['id'].value;
  Label.deleteLabel(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllLabels = function getAllLabels (req, res, next) {
  Label.getAllLabels()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLabel = function getLabel (req, res, next) {
  var id = req.swagger.params['id'].value;
  Label.getLabel(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLabel = function updateLabel (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Label.updateLabel(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
