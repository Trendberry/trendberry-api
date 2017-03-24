'use strict';

/**
 * Module dependencies
 */
var settingsPolicy = require('../policies/settings.policy'),
  settings = require('../controllers/settings.controller');

module.exports = function(app) {
  // Settings Routes
  app.route('/api/settings/:settingId?')//.all(settingsPolicy.isAllowed);
    .get(settings.read)
    .post(settings.create)
    .put(settings.update)
    .delete(settings.delete);

  // Finish by binding the Setting middleware
  app.param('settingId', settings.settingByID);
};
