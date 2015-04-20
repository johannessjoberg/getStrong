angular.module('starter.controllers')

.controller('createExerciseCtrl', createExerciseCtrl);

createExerciseCtrl.$inject = ['$scope', '$http'];

function createExerciseCtrl($scope){

  function findById(source, id) {
          return source.filter(function( obj ) {
            return +obj.id === +id;
          })[ 0 ];
  }

  if($scope.selectedExercise != undefined){
    $scope.form = $scope.selectedExercise;
    console.log($scope.selectedExercise);
  }
  else {
      $scope.form = {
      exerciseName: '',
      modifierIncline: false,
      modifierDecline: false,
      modifierAmrap: false,
      modifierWeighted: false,
      modifierAssisted: false,
      modifierSuperset: false,
      sets: 5,
      reps: 5,
      weight: undefined
    }
  }

  $scope.submit = function() {
    console.log($scope.selectedExerciseIndex);
    if($scope.form.exerciseName){
      if($scope.selectedExerciseIndex === undefined){
        saveNewExercise();
      }
      else{
        replaceExercise();  
      }
      $scope.selectedExercise = undefined;
      $scope.selectedExerciseIndex = undefined;
      $scope.modal.hide();
      $scope.modal.remove();
    }
  }

  function saveNewExercise() {
    console.log('Saved new exercise!');
    $scope.workout.exercises.push($scope.form);  
  }

  function replaceExercise(){
    console.log('Replaced old exercise!');
    $scope.workout.exercises[$scope.selectedExerciseIndex] = $scope.form;
  }
}