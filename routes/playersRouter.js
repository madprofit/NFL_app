var express = require('express');
var request = require('request');
var router = express.Router();
var ctrl = require('../entities/players/players_controller');


// set variables for scope
var player = [];
var displayName = [];
var team = [];

router.get('/', function(req, res) {
  // concatenate message
  var message = ''
  for (var i = 0; i < 10; i++) {
    message += '<h1> ' + displayName[i] + ' and ' + player[i] + ' </h1><hr>'
 //   message += '<img src="' + myImage[i] + '"><br><h1>This post has a score of ' + score[i] + ' // and ' + numComments[i] + ' comments.</h1><hr>'
  }
  res.send(message);
});

// // requst data from API
// request('http://www.fantasyfootballnerd.com/service/players/json/test/QB/', function(err, response, body) {
//   if (err) {
//     throw err;
//   };

//   // convert JSON to a JS object
//   var myResult = JSON.parse(body);
//   console.log('myResult.players ' + myResult.Players)
//   myResult.Players.forEach(function(player){
//     console.log(player.displayName )
//   })  // // drill in to get specific pieces of data
//    for (var i = 0; i < 10; i++){
//     // player.push(myResult.data.player);
//     // displayName.push(myResult.data.displayName);
//     // team.push(myResult.data.children[i].data.thumbnail);
//    }

//   console.log('player: ' + displayName);
//   // console.log('num_comments: ' + numComments);
//   // console.log('myImage: ' + myImage);
// });

// export router
module.exports = router;
