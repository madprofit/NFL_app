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
  self.show = show;
  self.player = {};
  self.players = [];
  self.foundMatch = false;

  function search() {
    console.log('search function')
    $http({
      method: 'GET',
      url: 'http://www.fantasyfootballnerd.com/service/players/json/test/QB/'
    }).then(function successCallback(response) {
      self.results = response.data.Players;
      console.log('first $http call')
      console.log(self.results);
      for (var i = 0; i < self.results.length; i++) {
        if (self.results[i].fname.toLowerCase() === self.search1.toLowerCase() || self.results[i].lname.toLowerCase() === self.search1.toLowerCase()) {
          self.players.push(self.results[i].displayName)
          console.log('new player', self.results[i].displayName)
        }
      }
      // self.results.Players.forEach(function(player){
      //   console.log(player.displayName)
      // })
      $http({
        method: 'GET',
        url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/test/QB/'
      }).then(function successCallback(response) {
        for (var i = 0; i < response.data.DraftProjections.length; i++) {
          console.log('display name', response.data.DraftProjections[i].displayName);
          for(var j = 0; j < self.players.length; j++) {
            if (response.data.DraftProjections[i].displayName == self.players[j]) {
              self.result = response.data.DraftProjections[i].displayName;
              console.log('index is: ' + i);
              self.foundMatch = true;
              continue
            }
          }
        }
        // self.result = response.data.DraftProjections;
        if (self.foundMatch === false) {
          console.log('No match!')
        } else {
          console.log('second $http call')
          console.log('player is', self.result);
          self.players = [];
        }
      });
      self.foundMatch = false;
      self.showSearch = !self.showSearch;
    });


  }


  function show(player){
    console.log(player);
    self.player = player;
  }

}
