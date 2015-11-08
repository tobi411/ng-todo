'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTodoApp'));

  var MainCtrl,
    scope,
    localStorageService,
    store;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_localStorageService_) {
    store = [];
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;

    //mock localStorageService get/add
    spyOn(localStorageService,'get').andCallFake(function(key){
      return store[key];
    });

    spyOn(localStorageService,'add').andCallFake(function(key, val){
      store[key] = val;
    });

    //Instantiate controller to test
    MainCtrl = $controller('MainController', {
      $scope: scope,
      localStorageService: localStorageService
    });
  }));

  it('should retrieve todos from the store and assign to scope', function () {
    expect(localStorageService.get).toHaveBeenCalledWith('todos');
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function(){
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.$digest();
    expect(localStorageService.add).toHaveBeenCalledWith('todos', jasmine.any(String));
    expect(scope.todos.length).toBe(1);
  });

  it('should add, then remove an item from the list and store', function(){
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
