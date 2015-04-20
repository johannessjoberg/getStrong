angular.module('starter.controllers')

.controller('createWorkoutCtrl', createWorkoutCtrl);

createWorkoutCtrl.$inject = ['$scope', '$ionicModal'];


function createWorkoutCtrl($scope, $ionicModal){
  $scope.workout = {};
  $scope.workout.exercises = [];
  $scope.workout.name;
 
  $scope.workout.exercises.push(
    $scope.form = {   
      id: 10,
      exerciseName: 'Chin-ups',
      modifierIncline: false,
      modifierDecline: false,
      modifierAmrap: false,
      modifierWeighted: false,
      modifierAssisted: false,
      modifierSuperset: false,
      sets: 3,
      reps: 8,
      weight: undefined
    }
  );

  $scope.selectedExercise = undefined;

  $scope.addExercise = function(){
    $scope.selectedExercise = undefined;
    $scope.selectedExerciseIndex = undefined;        
    $ionicModal.fromTemplateUrl('templates/createExercise.html', {
      scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
  }

  $scope.closeExerciseModal = function(){
    $scope.modal.hide();
  }

  $scope.editExercise = function(exercise, index){
    console.log(index);
   $scope.selectedExercise = exercise;
   $scope.selectedExerciseIndex = index;
    $ionicModal.fromTemplateUrl('templates/createExercise.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.deleteExercise = function(exerciseIndex){
    $scope.workout.exercises.splice(exerciseIndex,1);
  }

  $scope.saveWorkout = function(){
    console.log($scope.workout.name);
    console.log(JSON.stringify($scope.workout));
    console.log('saved workout!');
  } 
}