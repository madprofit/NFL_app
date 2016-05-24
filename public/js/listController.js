angular
  .module('nflApp')
  .controller('ListController', ListController);

function ListController($http, $stateParams) {
  var self = this;
  var searchString = encodeURIComponent($stateParams.s);

  $http({
    method: 'GET',
    url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/' + searchString
  }).then(function successCallback(response) {
    console.log(response);
    self.results = response.data.Players;

    console.log(self.results);
  });
}
