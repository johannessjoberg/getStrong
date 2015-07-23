angular.module('starter.controllers')

.controller('chooseWorkoutCtrl', chooseWorkoutCtrl);

chooseWorkoutCtrl.$inject = ['$scope', '$ionicModal', '$state', 'chosenWorkoutService', 'savedWorkouts'];

function chooseWorkoutCtrl($scope, $ionicModal, $state, chosenWorkoutService, savedWorkouts){
	$scope.workouts = savedWorkouts.getWorkouts();

	$scope.openWorkout = function(index){
		chosenWorkoutService.workout = $scope.workouts[index];
		$state.go('app.presentWorkout');
	}

}



//$scope.closeExerciseModal = function(){