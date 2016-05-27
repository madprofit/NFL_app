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
    url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/test/QB/'
  }).then(function successCallback(response) {
    self.result = response.data.DraftProjections.displayName[1];
    console.log(self.result);
  });
}


