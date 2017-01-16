var app = angular.module("cerebro",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home",{templateUrl : "home.html",controller : "cerebroController"})
	
	// core java start
	.when("/coreJava",{templateUrl : "coreJava.html",controller : "cerebroController"})
	.when("/string",{templateUrl : "string.html",controller : "cerebroController"})
	.when("/date",{templateUrl : "date.html",controller : "cerebroController"})
	.when("/collections",{templateUrl : "collections.html",controller : "cerebroController"})
	.when("/list",{templateUrl : "list.html",controller : "cerebroController"})
	.when("/map",{templateUrl : "map.html",controller : "cerebroController"})
	.when("/annotations",{templateUrl : "annotations.html",controller : "cerebroController"})
	.when("/enums",{templateUrl : "enums.html",controller : "cerebroController"})
	.when("/aspectJ",{templateUrl : "aspectJ.html",controller : "cerebroController"})
	.when("/fileIO",{templateUrl : "fileIO.html",controller : "cerebroController"})
	.when("/multiThreading",{templateUrl : "multiThreading.html",controller : "cerebroController"})
	// core java end
	
	// hibernate start
	.when("/hibernate",{templateUrl : "hibernate.html",controller : "cerebroController"})
	.when("/hibernate5HelloWorld",{templateUrl : "hibernate5HelloWorld.html",controller : "cerebroController"})
	// hibernate end
	
	// build tools start
	.when("/maven",{templateUrl : "maven.html",controller : "cerebroController"})
	.when("/installMaven",{templateUrl : "installMaven.html",controller : "cerebroController"})
	// build tools end
	
	// spring - start
	.when("/spring",{templateUrl : "spring.html",controller : "cerebroController"})
	.when("/springAopJavaConfig",{templateUrl : "springAopJavaConfig.html",controller : "cerebroController"})
	.when("/springAOPJavaConfigHelloWorld",{templateUrl : "springAOPJavaConfigHelloWorld.html",controller : "cerebroController"})
	.when("/springSecurityJavaConfig",{templateUrl : "springSecurityJavaConfig.html",controller : "cerebroController"})
	// spring end
	
	// tools start
	.when("/tools",{templateUrl : "tools.html",controller : "cerebroController"})
	.when("/csv",{templateUrl : "csv.html",controller : "cerebroController"})
	.when("/json",{templateUrl : "json.html",controller : "cerebroController"})
	.when("/openCSV",{templateUrl : "openCSV.html",controller : "cerebroController"})
	
	// tools end
	
	// unit testing start
	.when("/unitTesting",{templateUrl : "unitTesting.html",controller : "cerebroController"})
	.when("/junit",{templateUrl : "junit.html",controller : "cerebroController"})
	.when("/junitHelloWorld",{templateUrl : "junitHelloWorld.html",controller : "cerebroController"});
	// unit testing end
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