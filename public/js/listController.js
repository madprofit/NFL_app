angular
  .module('nflApp')
  .controller('ListController', ListController);

function ListController($http, $stateParams) {
  var self = this;
  var searchString = encodeURIComponent($stateParams.s);
  var qb = [];

  $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
  }).then(function successCallback(response) {
    self.results = response.data.Players[0];
    console.log(self.results);
    // self.results.Players.forEach(function(player){
    //   console.log(player.displayName)
    // })
  });
}
