angular
  .module('myApp')
  .controller('AppController', AppController);

AppController.$inject = [];

function AppController() {
  var self = this;
  self.hello = 'Hello World';
}
