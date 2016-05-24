/* jslint node: true */
'use strict';

var Player = require('./players_model');
var jsend = require('../../extras/jsend');
var controller = {};

controller.index = function(req, res, next) {
  Player.find({}, function(err, players) {
    if (err) throw err;
    res.json(jsend.success(players));
  });
};

// controller.create = function(req, res, next) {
//   var body = req.body;
//
//   var player = new Player();
//
//   player.playername = body.playername;
//   player.password = player.encrypt(body.password);
//
//   player.save(function(err) {
//     if (err) throw err;
//     res.json(jsend.success(player));
//   });
// };

controller.show = function(req, res, next) {
  var id = req.params.id;

  Player.findById(id, function(err, player) {
    if (err) throw err;
    res.json(jsend.success(player));
  });
};

controller.update = function(req, res, next) {
  var id = req.params.id;
  var body = req.body;

  Player.findById(id, function(err,player) {
    if (err) throw err;

    // update player fields here
    // i.e.
    // player.playernname = body.playername;

    player.save(function(err) {
      if (err) throw err;
      res.json(jsend.success(player));
    });
  });
};

controller.destroy = function(req, res, next) {
  var id = req.params.id;

  Player.findByIdAndRemove(id, function(err) {
    if (err) throw err;
    res.json(jsend.success(null));
  });
};

module.exports = controller;
