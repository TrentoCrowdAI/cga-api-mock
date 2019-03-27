'use strict';

var utils = require('../utils/writer.js');
var FlowConstraint = require('../service/FlowConstraintService');

module.exports.addFlowConstraint = function addFlowConstraint (req, res, next) {
  var flowConstraint = req.swagger.params['flowConstraint'].value;
  FlowConstraint.addFlowConstraint(flowConstraint)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFlowConstraint = function deleteFlowConstraint (req, res, next) {
  var id = req.swagger.params['id'].value;
  FlowConstraint.deleteFlowConstraint(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFlowConstraints = function getAllFlowConstraints (req, res, next) {
  FlowConstraint.getAllFlowConstraints()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFlowConstraint = function getFlowConstraint (req, res, next) {
  var id = req.swagger.params['id'].value;
  FlowConstraint.getFlowConstraint(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFlowConstraint = function updateFlowConstraint (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  FlowConstraint.updateFlowConstraint(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
