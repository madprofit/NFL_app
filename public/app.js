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
           'columnTwo': {templateUrl: 'partials/search2.html', controller: 'ListController2 as ctrl2'}}
    });



}
