'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('ngTodoApp'));

  var MainController,
    scope,
    localStorageService,
    store;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_localStorageService_) {
    store = {};
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;

    //mock localStorageService get
    spyOn(localStorageService,'get').and.callFake(function(key){
      return store[key];
    });

    //Object.defineProperty(sessionStorage, 'setItem', { writable: true });

    //mock add item
    spyOn(localStorageService,'set').and.callFake(function(key, val){
      store[key] = val;
    });

    //Instantiate controller to test
    MainController = $controller('MainController', {
      $scope: scope,
      localStorageService: localStorageService
    });

  }));

  it("should have a $scope variable", function(){
     expect(scope).toBeDefined();
  });

  it('should retrieve todos from the store and assign to scope', function () {
    expect(localStorageService.get).toHaveBeenCalledWith('todos');
    expect(scope.todos.length).toBe(0);
  });

  it('should add an item to the list', function(){
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.$digest();
    expect(localStorageService.set).toHaveBeenCalledWith('todos', scope.todos);
    expect(scope.todos.length).toBe(1);
  });

  it('should add, then remove an item from the list and store', function(){
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.$digest();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
