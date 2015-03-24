angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1, derp : 'hejsar'},
    { title: 'Chill', id: 2, derp : 'sss' },
    { title: 'Dubstep', id: 3, derp: 'adaw'},
    { title: 'Indie', id: 4, derp : 'reefd' },
    { title: 'Rap', id: 5, derp: 'rorororor' },
    { title: 'Cowbell', id: 6, derp: 'adasdasass' }
  ];
})

.controller('createWorkoutCtrl', function($scope, $ionicModal){
      $scope.workouts = [];

      $scope.addExercise = function(){
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
})

.controller('createExerciseCtrl', function($scope){
  $scope.form ={
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

  $scope.submit = function() {
    if($scope.form.exerciseName){
      console.log($scope.form);
      $scope.workouts.push($scope.form);
      $scope.modal.hide();
      $scope.modal.remove();
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
