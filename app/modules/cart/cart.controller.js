angular
.module('cart')
.controller('cartController', function($scope, Products, CartStorage/* Products, Cart */) {
	var self = this; 
	self.cartSrv = CartStorage;  
});