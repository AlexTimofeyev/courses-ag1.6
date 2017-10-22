angular
.module('main')
.controller('mainController', function($scope, Products, CartStorage/* Products, Cart */) {
    var self = this;   

	Products.getAllProducts(function(results) {
		self.products = results;
	});
 
	$scope.toCart = function (product) {
		CartStorage.setProduct(product); 
	}

	$scope.isInCart = function (product) {
		return CartStorage.isSet(product);
	}
	
	$scope.deleteFromCart = function (product) {
		return CartStorage.remove(product);
	}	
	
	
});