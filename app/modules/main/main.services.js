angular
.module('main')
.factory('Products', function($http) {
	return {
		getAllProducts: function(callback) {
			$http.get('/data/phones.json').then(function(result) {
				callback(result.data);
			},
			function(e) {
				console.error(e);
			});
		}
	};
});
