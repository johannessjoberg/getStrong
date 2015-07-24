angular.module('starter.controllers')

.controller('presentWorkoutCtrl', presentWorkoutCtrl);

presentWorkoutCtrl.$inject = ['$scope', '$ionicModal','$state', '$ionicHistory', 'chosenWorkoutService'];

function presentWorkoutCtrl($scope, $ionicModal, $state, $ionicHistory, chosenWorkoutService){
	console.log('presentWorkoutCtrl');
	$scope.workout 		= chosenWorkoutService.getChosenWorkout();
	$scope.workoutName 	= $scope.workout.name;
	$scope.exercises 	= $scope.workout.exercises;
	console.log($scope.exercises);

	$scope.trackWorkout = function(){
		$ionicHistory.nextViewOptions({
    		disableBack: true
  		});
  		chosenWorkoutService.setActiveWorkout($scope.workout);
		$state.go('app.trackWorkout');
	}
}