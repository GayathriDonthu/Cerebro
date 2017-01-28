var app = angular.module("cerebro",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home",{templateUrl : "home.html",controller : "cerebroController"})
	
	// core java start
	.when("/coreJava",{templateUrl : "coreJava.html",controller : "cerebroController"})
	.when("/string",{templateUrl : "string.html",controller : "cerebroController"})
	.when("/date",{templateUrl : "date.html",controller : "cerebroController"})
	.when("/list",{templateUrl : "list.html",controller : "cerebroController"})
	.when("/map",{templateUrl : "map.html",controller : "cerebroController"})
	.when("/annotations",{templateUrl : "annotations.html",controller : "cerebroController"})
	.when("/enums",{templateUrl : "enums.html",controller : "cerebroController"})
	.when("/aspectJ",{templateUrl : "aspectJ.html",controller : "cerebroController"})
	.when("/fileIO",{templateUrl : "fileIO.html",controller : "cerebroController"})
	.when("/multiThreading",{templateUrl : "multiThreading.html",controller : "cerebroController"})
	.when("/dynamicProxies",{templateUrl : "dynamicProxies.html",controller : "cerebroController"})
	// core java end
	
	// hibernate start
	.when("/hibernate",{templateUrl : "hibernate.html",controller : "cerebroController"})
	.when("/hibernate5HelloWorld",{templateUrl : "hibernate5HelloWorld.html",controller : "cerebroController"})
	// hibernate end
	
	// maven start
	.when("/maven",{templateUrl : "maven.html",controller : "cerebroController"})
	.when("/installMaven",{templateUrl : "installMaven.html",controller : "cerebroController"})
	.when("/coreJavaProjectWithMaven",{templateUrl : "coreJavaProjectWithMaven.html",controller : "cerebroController"})
	.when("/compilerPlugin",{templateUrl : "compilerPlugin.html",controller : "cerebroController"})
	.when("/repositoriesTag",{templateUrl : "repositoriesTag.html",controller : "cerebroController"})
	.when("/jarPlugin",{templateUrl : "jarPlugin.html",controller : "cerebroController"})
	.when("/sourcePlugin",{templateUrl : "sourcePlugin.html",controller : "cerebroController"})
	.when("/javadocPlugin",{templateUrl : "javadocPlugin.html",controller : "cerebroController"})
	.when("/warPlugin",{templateUrl : "warPlugin.html",controller : "cerebroController"})
	.when("/pmdPlugin",{templateUrl : "pmdPlugin.html",controller : "cerebroController"})
	// maven end
	
	// spring - start
	.when("/spring",{templateUrl : "spring.html",controller : "cerebroController"})
	.when("/springAopJavaConfig",{templateUrl : "springAopJavaConfig.html",controller : "cerebroController"})
	.when("/springAOPJavaConfigHelloWorld",{templateUrl : "springAOPJavaConfigHelloWorld.html",controller : "cerebroController"})
	.when("/springSecurityJavaConfig",{templateUrl : "springSecurityJavaConfig.html",controller : "cerebroController"})
	// spring end
	
	// tools start
	.when("/tools",{templateUrl : "tools.html",controller : "cerebroController"})
	.when("/csv",{templateUrl : "csv.html",controller : "cerebroController"})
	.when("/jacksonJson",{templateUrl : "jacksonJson.html",controller : "cerebroController"})
	.when("/jacksonReadJson",{templateUrl : "readJson.html",controller : "cerebroController"})
	.when("/openCSV",{templateUrl : "openCSV.html",controller : "cerebroController"})
	.when("/dozer",{templateUrl : "dozer.html",controller : "cerebroController"})
	// tools end
	
	// unit testing start
	.when("/unitTesting",{templateUrl : "unitTesting.html",controller : "cerebroController"})
	.when("/junit",{templateUrl : "junit.html",controller : "cerebroController"})
	.when("/junitHelloWorld",{templateUrl : "junitHelloWorld.html",controller : "cerebroController"})
	// unit testing end
	
	// ant start
	.when("/ant",{templateUrl : "ant.html",controller : "cerebroController"})
	.when("/antJacoco",{templateUrl : "antJacoco.html",controller : "cerebroController"})
	// ant end
	
	// gradle start
	.when("/gradle",{templateUrl : "gradle.html",controller : "cerebroController"})
	//gradle end
	
	// DB start
	.when("/db",{templateUrl : "db.html",controller : "cerebroController"})
	.when("/h2DB",{templateUrl : "h2DB.html",controller : "cerebroController"})
	// DB end
	
	// Scala start
	.when("/scala",{templateUrl : "scala.html",controller : "cerebroController"})
	.when("/installScala",{templateUrl : "installScala.html",controller : "cerebroController"})
	.when("/scalaHelloWorldWithSbt",{templateUrl : "scalaHelloWorldWithSbt.html",controller : "cerebroController"})
	// Scala end
	
	// definitions start
	.when("/definitions",{templateUrl : "definitions.html",controller : "definitionsController"});
	// definitions end
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
	
};

var DefinitionsController = function($scope, $location, $anchorScroll, $http){
	var definitionsMessage = " Definitions";
	var config = {"Content-Type": "application/json"};
	
	$scope.message = "Cerebro Definitions";
	$scope.definitionsType;
	$scope.definition = {'description':'','details':''};
	
	var onSuccess = function(response){
		console.log("onSuccess()");
		$scope.definitionsList = response.data;
	};
	
	var onError = function(){
		console.log("onError()");
	};
	
	var onAddSuccess = function(){
		$scope.addDefinitionStatus = "add success";
		$scope.definition.description = '';
		$scope.definition.details = '';
		getDefinitions();
	}
	
	var onAddError = function(){
		$scope.addDefinitionStatus = "add error";
	}
	
	var getDefinitions = function(){
		$http.get("/definitions/"+$scope.definitionsType).then(onSuccess, onError);
		$scope.message = $scope.definitionsType + definitionsMessage;
	};
	
	var addDefintions = function(){
		$http.post("/addDefinitions",$scope.definition,config).then(onAddSuccess, onAddError);
	}
	
	$scope.getDefinitions = getDefinitions;
	$scope.addDefintions = addDefintions;
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


app.controller("cerebroController",["$scope", "$location", "$anchorScroll", CerebroController] );
app.controller("definitionsController",["$scope", "$location", "$anchorScroll","$http", DefinitionsController]);