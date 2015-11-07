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
    $scope.todos = ['Item 1', 'Item 2','Item 3'];

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    };
}]);
