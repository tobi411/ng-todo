'use strict';

/**
 * @ngdoc function
 * @name ngTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTodoApp
 */
angular.module('ngTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
