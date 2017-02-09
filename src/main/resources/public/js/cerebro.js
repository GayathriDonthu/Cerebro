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
	.when("/java8CollectionStreams",{templateUrl : "java8CollectionStreams.html",controller : "cerebroController"})
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
	.when("/springSecurityFlow",{templateUrl : "springSecurityFlow.html",controller : "cerebroController"})
	.when("/springMVC",{templateUrl : "springMVC.html",controller : "cerebroController"})
	.when("/springMVCHelloWorldXml",{templateUrl : "springMVCHelloWorldXml.html",controller : "cerebroController"})
	.when("/springMVCPropertiesFileXml",{templateUrl : "springMVCPropertiesFileXml.html",controller : "cerebroController"})
	.when("/springMVCFormXml",{templateUrl : "springMVCFormXml.html",controller : "cerebroController"})
	.when("/springMVCFormValidationXml",{templateUrl : "springMVCFormValidationXml.html",controller : "cerebroController"})
	.when("/springMVCFwdXml",{templateUrl : "springMVCFwdXml.html",controller : "cerebroController"})
	.when("/springMVCI18NXml",{templateUrl : "springMVCI18NXml.html",controller : "cerebroController"})
	.when("/springMVCRedirectXml",{templateUrl : "springMVCRedirectXml.html",controller : "cerebroController"})
	.when("/springMVCStaticFilesXml",{templateUrl : "springMVCStaticFilesXml.html",controller : "cerebroController"})
	.when("/springMVCContentNegotiationXml",{templateUrl : "springMVCContentNegotiationXml.html",controller : "cerebroController"})
	.when("/springMVCXmlJunitTesting",{templateUrl : "springMVCXmlJunitTesting.html",controller : "cerebroController"})
	.when("/springMVCCustomConfigXml",{templateUrl : "springMVCCustomConfigXml.html",controller : "cerebroController"})
	.when("/springCore",{templateUrl : "springCore.html",controller : "cerebroController"})
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
	
	// Apache camel start
	.when("/camel",{templateUrl : "camel.html",controller : "cerebroController"})
	.when("/camelUnmarshalCsv",{templateUrl : "camelUnmarshalCsv.html",controller : "cerebroController"})
	
	// Apache camel end
	
	// definitions start
	.when("/definitions",{templateUrl : "definitions.html",controller : "definitionsController"});
	// definitions end
});

var CerebroController = function($scope, $location, $anchorScroll, breadCrumbsService){
	
	$scope.navigate = function(id){
		$location.hash(id);
		$anchorScroll();
	};
	
	$scope.scrollUp = function(){
		$('body,html').animate({scrollTop: 0}, 800);
        return false;
	};
	
	$scope.buildBreadCrumbs = function(name, link){
		breadCrumbsService.addBreadCrumb(name, link);
	};
	
	$scope.resetBreadCrumbs = function(){
		breadCrumbsService.resetBreadCrumbs();
	}
	$scope.breadCrumbs = breadCrumbsService.getNavigations();
	console.log("$scope.breadCrumbs: "+$scope.breadCrumbs);
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

app.service('breadCrumbsService', function(){
	var navigations = new Array();
	var keys = new Array();
	var isHomeAdded = false;
	var prefix = "cerebro.html";
	var homeKey = "Home";
	var homeLink = prefix+"#home"
	
	this.addBreadCrumb = function(name, link){
		if(!isHomeAdded){
			navigations.push({"name": homeKey,"link": homeLink});
			keys.push(homeKey);
		}
		link = prefix + link;
		if(keys.indexOf(name) == -1){
			navigations.push({name, link});
			keys.push(name);
		}
		isHomeAdded = true;
	}
	
	this.getNavigations = function(){
		return navigations; 
	};
	
	this.resetBreadCrumbs = function(){
		navigations = new Array();
		isHomeAdded = false;
	}
	
});

app.controller("cerebroController",["$scope", "$location", "$anchorScroll", "breadCrumbsService", CerebroController] );
app.controller("definitionsController",["$scope", "$location", "$anchorScroll","$http", DefinitionsController]);