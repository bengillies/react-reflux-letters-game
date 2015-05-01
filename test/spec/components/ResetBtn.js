'use strict';

describe('ResetBtn', function () {
  var React = require('react/addons');
  var ResetBtn, component;

  beforeEach(function () {
    ResetBtn = require('components/ResetBtn.js');
    component = React.createElement(ResetBtn);
  });

  it('should create a new instance of ResetBtn', function () {
    expect(component).toBeDefined();
  });
});
