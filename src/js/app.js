angular.module('UnusualDevGames', [
  'ngRoute',
  'mobile-angular-ui',
  'UnusualDevGames.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});