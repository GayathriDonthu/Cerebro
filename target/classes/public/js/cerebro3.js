(function(){
	var app = angular.module("cerebro",[]);
	
	var CerebroController = function($scope, $location, $anchorScroll){
		
		var htmlSuffix = ".html";
		
		$scope.navigate = function(id){
			$location.hash(id);
			$anchorScroll();
		};
		
		$scope.scrollUp = function(){
			$('body,html').animate({scrollTop: 0}, 800);
            return false;
		};
		
		
		var navigations2 = new Array();
		
		$scope.buildBreadCrumbs = function(name, link){
			var link2 =  link+htmlSuffix;
			navigations2 = new Array({"name": "Home",
	        	"link": "home"+htmlSuffix},
	            {"name": "Core Java",
	          	"link": "coreJava"+htmlSuffix},
	            {"name": "Hibernate",
	          	"link": "hibernate"+htmlSuffix},
	            {"name": "Vacation",
	          	"link": "#"});
			navigations2.push({name, link2});
			window.location.href=link2;
		};
		
		$rootScope.navigations = navigations2;
		console.log("$scope.navigations: "+$rootScope.navigations);
		
	}
	
	app.controller("cerebroController",["$scope", "$location", "$anchorScroll", CerebroController] );
}());