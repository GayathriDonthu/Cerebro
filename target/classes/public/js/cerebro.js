var app = angular.module("cerebro",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home",{templateUrl : "home.html",controller : "cerebroController"})
	.when("/coreJava",{templateUrl : "coreJava.html",controller : "cerebroController"})
	.when("/string",{templateUrl : "string.html",controller : "cerebroController"})
	.when("/date",{templateUrl : "date.html",controller : "cerebroController"})
	.when("/collections",{templateUrl : "collections.html",controller : "cerebroController"})
	.when("/annotations",{templateUrl : "annotations.html",controller : "cerebroController"})
	.when("/enums",{templateUrl : "enums.html",controller : "cerebroController"})
	.when("/aspectJ",{templateUrl : "aspectJ.html",controller : "cerebroController"})
	.when("/fileIO",{templateUrl : "fileIO.html",controller : "cerebroController"})
	.when("/multiThreading",{templateUrl : "multiThreading.html",controller : "cerebroController"})
	.when("/hibernate",{templateUrl : "hibernate.html",controller : "cerebroController"})
	.when("/hibernate5HelloWorld",{templateUrl : "hibernate5HelloWorld.html",controller : "cerebroController"})
	.when("/maven",{templateUrl : "maven.html",controller : "cerebroController"})
	.when("/spring",{templateUrl : "spring.html",controller : "cerebroController"})
	.when("/tools",{templateUrl : "tools.html",controller : "cerebroController"})
	.when("/unitTesting",{templateUrl : "unitTesting.html",controller : "cerebroController"});
});

var CerebroController = function($scope, $location, $anchorScroll){
	$scope.navigate = function(id){
		$location.hash(id);
		$anchorScroll();
	};
	
	$scope.scrollUp = function(){
		$('body,html').animate({scrollTop: 0}, 800);
        return false;
	};
	
	/*$scope.navigations = new Array();
	$scope.navigations.push({"name": "Home","link": "cerebro.html#home"});
	$scope.navigations.push({"name": "Core Java","link": "coreJava"});
	$scope.navigations.push({"name": "Hibernate","link": "hibernate"});
	$scope.navigations.push({"name": "Vacation","link": "#"});
	
	$scope.buildBreadCrumbs = function(name, link){
		link =  "cerebro.html#"+link;
		$scope.navigations.push({name,link});
	};
	
	console.log($scope.navigations);*/
}

app.controller("cerebroController",["$scope", "$location", "$anchorScroll", CerebroController] );