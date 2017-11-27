var app = angular;

app.module('UnusualDevGames', [
  'ngRoute',
  'mobile-angular-ui',
  'UnusualDevGames.controllers.Main'
])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/home',
        });
});