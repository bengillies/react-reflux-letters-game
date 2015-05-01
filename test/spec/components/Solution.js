'use strict';

describe('Solution', function () {
  var React = require('react/addons');
  var Solution, component;

  beforeEach(function () {
    Solution = require('components/Solution.js');
    component = React.createElement(Solution);
  });

  it('should create a new instance of Solution', function () {
    expect(component).toBeDefined();
  });
});
