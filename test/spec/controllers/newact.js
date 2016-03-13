'use strict';

describe('Controller: NewactCtrl', function () {

  // load the controller's module
  beforeEach(module('statApp'));

  var NewactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewactCtrl = $controller('NewactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewactCtrl.awesomeThings.length).toBe(3);
  });
});
