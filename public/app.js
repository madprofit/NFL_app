angular
  .module('myApp', [
    'myApp.subsection',
    'ui.router'
  ])
  .config(myConfig);

myConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function myConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('subsection', {
      url: '/subsection',
      templateUrl: 'subsection/subsection.html',
      controller: 'SubsectionController as ctrl'
    });
}
