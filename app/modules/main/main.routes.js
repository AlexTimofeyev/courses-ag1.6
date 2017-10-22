angular
.module('main')
.config(function($stateProvider) { 
	
	$stateProvider.state('main', {
		url: "/",
		templateUrl: "/modules/main/main.html",
		controller: 'mainController',
		controllerAs: 'main'
	});

	
});