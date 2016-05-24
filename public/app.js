angular
  .module('nflApp', ['ui.router'])
  .config(configuration);

function configuration($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('search', {
      url: '',
      templateUrl: 'partials/search.html',
      controller: function($scope) {}
    })
   .state('list', {
      url: '/results?s',
      templateUrl: 'partials/list.html',
      controller: 'ListController as ctrl'
    })
    .state('player', {
      url: '/list/:id',
      templateUrl: 'partials/player.html',
      controller: 'PlayerController as ctrl'
    });
}
