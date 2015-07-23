angular.module('starter')

.service('savedWorkouts', function(){
	this.workouts = [];
	this.addWorkout = function(workout){
		this.workouts.push(workout);
	};
	this.getWorkouts = function(){
		return this.workouts;
	};
});

