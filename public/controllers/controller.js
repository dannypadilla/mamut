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
	console.log("Add " + $scope.entry);
	$scope.entry.type = "audio";
	$http.post("/portfolio", $scope.entry).success( function(res) {
	    console.log(res);
	    refresh();
	});
    };

    $scope.remove = function(id) {
	console.log("Remove " + id);
	$http.delete("/portfolio/" + id).success( function(res) {
	    refresh();
	});
    };

    $scope.edit = function(id) {
	console.log("Edit " + id);
	$http.get("/portfolio/" + id).success( function(res) {
	    $scope.entry = response; // put response in input boxes
	});
    };

    $scope.update = function(id) {
	console.log("Update " + $scope.entry._id);
	$http.put("/portfolio/" + $scope.entry._id, $scope.entry).success( function(res) {
	    refresh();
	});
    };

    $scope.deselect = function() {
	console.log("Deselect");
	$scope.entry = "";
    };
    
}]);
