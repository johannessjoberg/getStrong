angular.module('starter.controllers')

.controller('ContentController', ContentController);

ContentController.$inject = ['$scope', '$http'];


function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}