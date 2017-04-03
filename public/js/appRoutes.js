angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/kofee', {
			templateUrl: 'views/kofee.html',
			controller: 'KofeeController'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/signup', {
			templateUrl: 'views/register.html',
			controller: 'SignupController'
		})
	$locationProvider.html5Mode(true);

}]);