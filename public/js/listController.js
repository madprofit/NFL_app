angular
  .module('nflApp')
  .controller('ListController1', ListController1);

function ListController1($http, $stateParams) {
  var self = this;
  var searchString = ($stateParams.s);
  self.searchString = searchString;
  console.log($stateParams.s)
  var qb = [];

  $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
<<<<<<< HEAD
  }).then(function successCallback(response) {
    self.results = response.data.Players[0];
=======
  }).then(function successCallback(response1) {
    self.results = response1.data.Players;
>>>>>>> projections
    console.log(self.results);
    // self.results.Players.forEach(function(player){
    //   console.log(player.displayName)
    // })
  });

}
