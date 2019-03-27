'use strict';

var utils = require('../utils/writer.js');
var DataCollection = require('../service/DataCollectionService');

module.exports.addDataCollection = function addDataCollection (req, res, next) {
  var dataCollection = req.swagger.params['dataCollection'].value;
  DataCollection.addDataCollection(dataCollection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDataCollection = function deleteDataCollection (req, res, next) {
  var id = req.swagger.params['id'].value;
  DataCollection.deleteDataCollection(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllDataCollections = function getAllDataCollections (req, res, next) {
  DataCollection.getAllDataCollections()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDataCollection = function getDataCollection (req, res, next) {
  var id = req.swagger.params['id'].value;
  DataCollection.getDataCollection(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDataCollection = function updateDataCollection (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  DataCollection.updateDataCollection(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
