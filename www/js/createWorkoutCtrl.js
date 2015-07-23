angular.module('starter.controllers')

.controller('createWorkoutCtrl', createWorkoutCtrl);

createWorkoutCtrl.$inject = ['$scope', '$ionicModal', '$timeout', 'savedWorkouts'];


function createWorkoutCtrl($scope, $ionicModal, $timeout, savedWorkouts){
  $scope.workout = newWorkout();
  $scope.showConfirmation = false;
  $scope.showConfirmationDuration = 2500;

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

  function newWorkout(){
    var workout = {};
    workout.exercises = [];
    workout.name;
   
    workout.exercises.push(
      form = {   
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
    return workout;
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
    if($scope.workout.name == null){
      showSaveError();  
    }
    else{
      savedWorkouts.addWorkout($scope.workout);
      showSaveSuccess();
      $scope.workout = newWorkout();  
    }
  } 

  function showSaveError(){
    displayMessageCard('Workout must have a name!');
  }

  function showSaveSuccess(){
    displayMessageCard('Workout ' + $scope.workout.name + ' saved!');
    
  }

  function displayMessageCard(message){
    $scope.confirmationMessage = message;
    $scope.showConfirmation = true;
    $timeout(hideConfirmation, $scope.showConfirmationDuration);
  }

  function hideConfirmation(){
    $scope.showConfirmation = false;
  }
}