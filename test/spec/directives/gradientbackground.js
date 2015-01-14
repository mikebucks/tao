'use strict';

describe('Directive: gradientBackground', function () {

  // load the directive's module
  beforeEach(module('appApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gradient-background></gradient-background>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gradientBackground directive');
  }));
});
