'use strict';

describe('Directive: timer', function () {

  // load the directive's module
  beforeEach(module('bathmirrorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<timer></timer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timer directive');
  }));
});
