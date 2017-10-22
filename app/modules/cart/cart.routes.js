angular
.module('cart')
.config(function($stateProvider) { 
	
	$stateProvider.state('cart', {
		url: "/",
		templateUrl: "/modules/cart/cart.html",
		controller: 'cartController',
		controllerAs: 'ctrl'
	});

	
});