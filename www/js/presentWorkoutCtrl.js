angular.module('starter.controllers')

.controller('presentWorkoutCtrl', presentWorkoutCtrl);

presentWorkoutCtrl.$inject = ['$scope', '$ionicModal','$state', 'chosenWorkoutService'];

function presentWorkoutCtrl($scope, $ionicModal, $state, chosenWorkoutService){
	console.log('presentWorkoutCtrl');
	$scope.workoutName = chosenWorkoutService.workout.name;
	$scope.exercises = chosenWorkoutService.workout.exercises;
	console.log($scope.exercises);

	$scope.trackWorkout = function(){
		console.log('hello');
		$state.go('app.trackWorkout');
	}
}