angular.module('starter')

.service('chosenWorkoutService', function(){
	this.chosenWorkout = null;
	this.activeWorkout = null;

	this.setChosenWorkout = function(workout){
		this.chosenWorkout = workout;
	}

	this.getChosenWorkout = function(){
		return this.chosenWorkout;
	}

	this.setActiveWorkout = function(workout){
		this.activeWorkout = workout;
	}

	this.getActiveWorkout = function(){
		return this.activeWorkout;
	}
});

