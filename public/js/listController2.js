angular
  .module('nflApp')
  .controller('ListController2', ListController2);

function ListController2($http, $stateParams) {
  var self = this;
  var searchString = ($stateParams.s);
  self.searchString = searchString;
  console.log($stateParams.s);
  var qb = [];

  $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
  }).then(function successCallback(response) {
    self.results2 = response.data.Players;
    console.log(self.results2);
    // self.results.Players.forEach(function(player){
    //   console.log(player.displayName)
    // })
  });

}
