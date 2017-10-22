angular
.module('app')
.config(function($mdThemingProvider) { 
	$mdThemingProvider
    .theme('default')
    .primaryPalette('blue')
    .accentPalette('blue')
    .warnPalette('orange')
    .backgroundPalette('blue');	
});