'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

  function SumCtrl($scope) {
	$scope.list=[]
	 var a=Math.floor(Math.random()*10+1);
	 var b=Math.floor(Math.random()*10+1);
	 $scope.q=a+"+"+b;
	 var start=new Date();
	 $scope.change=function(){
		start=new Date();
		a=Math.floor(Math.random()*10+1);
		b=Math.floor(Math.random()*10+1);
		$scope.q=a+"+"+b;
	  }
  $scope.sum = function() {
	  var end=new Date();
	  var t=a+b;
	  
	 
	if($scope.total==a+b){
		$scope.res="right";	
		
	}
	else{
		$scope.res="error";
	};
    $scope.count_time=(end.getTime()-start.getTime())/1000;
	$scope.list.push($scope.q+"="+t+";use time:"+$scope.count_time+";"+$scope.res);
	$scope.change();
	$scope.total='';
  };
  }
