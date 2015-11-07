'use strict';

/**
 * @ngdoc function
 * @name ngTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTodoApp
 */
angular.module('ngTodoApp')
  .controller('MainController', [ '$scope', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    };
}]);
