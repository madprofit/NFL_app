angular
  .module('nflApp', ['ui.router'])
  .config(configuration);

function configuration($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('search1',  {
      url: '',
      templateUrl: 'partials/search1.html',
      controller: function($scope) {}
    })
      // $stateProvider
      // .state('search2', {
      //   url: '',
      //   templateUrl: 'partials/search2.html',
      //   controller: function($scope) {}
      // })
      .state('list1', {
         url: '/results1/:s',
         templateUrl: 'partials/list1.html',
         controller: 'ListController1 as ctrl1'
    })
      .state('list2', {
         url: '/results2/:s',
         templateUrl: 'partials/list1.html',
         controller: 'ListController2 as ctrl2'
       })
      .state('player1', {
        url: '/players1/:id',
        templateUrl: 'partials/player1.html',
        controller: 'PlayerController as ctrl'
    });

}
