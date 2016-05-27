angular
  .module('nflApp')
  .controller('PlayerController2', PlayerController2);

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
    self.result = response.data.Players[1];
    console.log(self.result);
  });

   $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/test/QB/'
  }).then(function successCallback(response) {
    self.result = response.data.DraftProjections.displayName[1];
    console.log(self.result);
  });
}
