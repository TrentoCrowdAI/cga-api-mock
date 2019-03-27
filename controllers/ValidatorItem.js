'use strict';

var utils = require('../utils/writer.js');
var ValidatorItem = require('../service/ValidatorItemService');

module.exports.addValidatorItem = function addValidatorItem (req, res, next) {
  var validatorItem = req.swagger.params['validatorItem'].value;
  ValidatorItem.addValidatorItem(validatorItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteValidatorItem = function deleteValidatorItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  ValidatorItem.deleteValidatorItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllValidatorItems = function getAllValidatorItems (req, res, next) {
  ValidatorItem.getAllValidatorItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getValidatorItem = function getValidatorItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  ValidatorItem.getValidatorItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateValidatorItem = function updateValidatorItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  ValidatorItem.updateValidatorItem(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
