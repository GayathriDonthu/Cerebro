(function(){
	var app = angular.module("cerebro",[]);
	
	var CerebroController = function($scope, $location, $anchorScroll){
		
		$scope.navigate = function(id){
			$location.hash(id);
			$anchorScroll();
		};
		
		$scope.scrollUp = function(){
			$('body,html').animate({scrollTop: 0}, 800);
            return false;
		};
		
	}
	
	app.controller("cerebroController",["$scope", "$location", "$anchorScroll", CerebroController] );
}());