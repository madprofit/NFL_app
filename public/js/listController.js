angular
  .module('nflApp')
  .controller('ListController1', ListController1);

function ListController1($http, $stateParams) {
  var self = this;
  var searchString = ($stateParams.s);
  self.searchString = searchString;
  console.log($stateParams.s);
  var qb = [];
  self.showSearch = false;
  self.search1= '';
  self.search = search;
  self.results;


  function search() {
    console.log('search function')
    $http({
      method: 'GET',
      url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
    }).then(function successCallback(response) {
      self.results = response.data.Players;
      console.log(self.results);
      // self.results.Players.forEach(function(player){
      //   console.log(player.displayName)
      // })
    });
    self.showSearch = !self.showSearch;
  }

}
