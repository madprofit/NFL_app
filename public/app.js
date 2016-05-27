angular
  .module('nflApp', ['ui.router'])
  .config(configuration);
  //.directive('navBar', navBar);

function configuration($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      views: { '': {template: '<h1>Hello</h1>'},
           'columnOne': {templateUrl: 'partials/search1.html', controller: 'ListController1 as ctrl1'},
           'columnTwo': {templateUrl: 'partials/search2.html', controller: 'ListController2 as ctrl2'}},
    });

     $stateProvider
    .state('player', {
      url: '/',
      views: { '': {template: ''},
           'columnOne': {templateUrl: 'partials/player1.html', controller: 'player-controller as playerctrl1'},
           'columnTwo': {templateUrl: 'partials/player2.html', controller: 'player-controller2 as playerctrl2'}},
    });

}
