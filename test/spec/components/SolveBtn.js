'use strict';

describe('SolveBtn', function () {
  var React = require('react/addons');
  var SolveBtn, component;

  beforeEach(function () {
    SolveBtn = require('components/SolveBtn.js');
    component = React.createElement(SolveBtn);
  });

  it('should create a new instance of SolveBtn', function () {
    expect(component).toBeDefined();
  });
});
