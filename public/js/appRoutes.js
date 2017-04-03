angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/kofee', {
			templateUrl: 'views/kofee.html',
			controller: 'kofeeController'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupController'
		})
	$locationProvider.html5Mode(true);

}]);