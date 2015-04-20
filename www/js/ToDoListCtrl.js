angular.module('starter.controllers')

.controller('ToDoListCtrl', ToDoListCtrl);

ToDoListCtrl.$inject = ['$scope', '$http'];

 function ToDoListCtrl ($scope, $http) {
  $scope.toDoListItems = [{
    task: 'Scuba Diving',
    status: 'not done'
  }, {
    task: 'Climb Everest',
    status: 'not done'
  }]
}