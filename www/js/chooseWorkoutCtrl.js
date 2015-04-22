angular.module('starter.controllers')

.controller('chooseWorkoutCtrl', chooseWorkoutCtrl);

chooseWorkoutCtrl.$inject = ['$scope', '$ionicModal', '$state'];

function chooseWorkoutCtrl($scope, $ionicModal, $state){
	$scope.workouts = JSON.parse(workout);
	console.log($scope.workouts)

$scope.openWorkout = function(){
	$state.go("app.presentWorkout");
}

}



//$scope.closeExerciseModal = function(){