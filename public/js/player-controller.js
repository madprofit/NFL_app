angular
  .module('nflApp')
  .controller('PlayerController', PlayerController);

PlayerController.$inject = ['$http', '$stateParams'];

function PlayerController($http, $stateParams) {
  var self = this;
  var playerId = $stateParams.id;
  self.playerId = playerId;
  console.log($stateParams.id);


  $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
  }).then(function successCallback(response) {
    self.result = response.data.Players;
    console.log(self.result);
  });
}

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
