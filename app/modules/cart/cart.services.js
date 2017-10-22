angular
.module('cart')
.factory('CartStorage', function($filter) {
	return {
		products : [],
		setProduct: function(product) {
			var exist = $filter('filter')(this.products, {id: product.id}, true)
			if(!exist.length) {
				this.products.push(product);
			}
		},
		getAllProducts: function() {
			return this.products;
		},
		getCount: function() {
			return this.products.length;
		},
		remove: function(product) {
			var item  = $filter('filter')(this.products, {id: product.id}, true);
            var index = 0;
            if(item.length) {
                index = this.products.indexOf(item[0]);
            }
			return this.products.splice(index,1);
		},
		isSet: function(product) {
			return !!$filter('filter')(this.products, {id: product.id}, true).length;
		},		
		total: function () {
			var total = 0;
			for(var i = 0; i < this.products.length; i++){
				total += this.products[i].price;
			}
			return total;			
		}
	};
});
