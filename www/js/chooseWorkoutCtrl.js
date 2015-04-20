angular.module('starter.controllers')

.controller('chooseWorkoutCtrl', chooseWorkoutCtrl);

chooseWorkoutCtrl.$inject = ['$scope', '$ionicModal'];

function chooseWorkoutCtrl($scope, $ionicModal){
	$scope.workouts = JSON.parse(workout);
	console.log($scope.workouts)
}