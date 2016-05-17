/* jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
var ctrl = require('../entities/users/users_controller');

router.route('/')
  .get(ctrl.index)
  .post(ctrl.create);

router.route('/:id')
  .get(ctrl.show)
  .put(ctrl.update)
  .delete(ctrl.destroy);

module.exports = router;
