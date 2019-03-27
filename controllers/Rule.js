'use strict';

var utils = require('../utils/writer.js');
var Rule = require('../service/RuleService');

module.exports.addRule = function addRule (req, res, next) {
  var rule = req.swagger.params['rule'].value;
  Rule.addRule(rule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRule = function deleteRule (req, res, next) {
  var id = req.swagger.params['id'].value;
  Rule.deleteRule(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRules = function getAllRules (req, res, next) {
  Rule.getAllRules()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRule = function getRule (req, res, next) {
  var id = req.swagger.params['id'].value;
  Rule.getRule(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRule = function updateRule (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Rule.updateRule(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
