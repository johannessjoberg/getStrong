angular.module('starter.controllers')

.controller('trackWorkoutCtrl', trackWorkoutCtrl);

trackWorkoutCtrl.$inject = ['$scope', 'chosenWorkoutService'];

function trackWorkoutCtrl($scope, chosenWorkoutService){
	$scope.trackedWorkout = chosenWorkoutService.getActiveWorkout(); //angular.fromJson(workout)[0]; //TESTDATA

	$scope.getNumber = function(num) {
	    return new Array(num);   
	}

	$scope.hideUnit = function(exercise){
		return exercise.weight == null;
	}

}