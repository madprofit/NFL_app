/* jslint node: true */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  displayName: String,
  //password: String,
});


var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
