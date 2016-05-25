angular
  .module('nflApp', ['ui.router'])
  .config(configuration);

function configuration($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('search1', {
      url: '',
      templateUrl: 'partials/search.html',
      controller: function($scope) {}
    })
    $stateProvider
    .state('search2', {
      url: '',
      templateUrl: 'partials/search.html',
      controller: function($scope) {}
    })
   .state('list1', {
      url: '/results?s',
      templateUrl: 'partials/list1.html',
      controller: 'ListController as ctrl'
    })
   .state('list2', {
      url: '/results?s',
      templateUrl: 'partials/list2.html',
      controller: 'ListController as ctrl'
    })
    .state('player1', {
      url: '/players1/:id',
      templateUrl: 'partials/player1.html',
      controller: 'PlayerController as ctrl'
    })
    .state('player2', {
      url: '/players2/:id',
      templateUrl: 'partials/player2.html',
      controller: 'PlayerController as ctrl'
    });
}
