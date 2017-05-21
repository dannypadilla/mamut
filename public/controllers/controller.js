var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("controller works");

    var refresh = function() {
	$http.get("/portfolio").success( function(res) {
	    console.log("got data");
	    $scope.portfolio = res;
	    $scope.entry = ""; // clears input boxes
	});
    };
    refresh();

    $scope.addName = function() {
	console.log($scope.entry);
	$scope.entry.type = "edu";
	$http.post("/portfolio", $scope.entry).success( function(res) {
	    console.log(res);
	    refresh();
	});
    };
    
}]);
