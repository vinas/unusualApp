var app = angular.module('app', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider
			.when('/', {
				redirectTo: '/home',
			})
			.when('/home', {
				templateUrl: 'app/home/template.html',
				controller: 'HomeController'
			})
			.otherwise({
				redirectTo: '/home',
			})
	}]);
