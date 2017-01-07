(function(){
	var app = angular.module("cerebro",[]);
	
	var CerebroController = function($scope, $location, $anchorScroll){
		
		$scope.navigate = function(id){
			$location.hash(id);
			$anchorScroll();
		};
		
	}
	
	app.controller("cerebroController",["$scope", "$location", "$anchorScroll", CerebroController] );
}());