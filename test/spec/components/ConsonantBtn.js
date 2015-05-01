'use strict';

describe('ConsonantBtn', function () {
  var React = require('react/addons');
  var ConsonantBtn, component;

  beforeEach(function () {
    ConsonantBtn = require('components/ConsonantBtn.js');
    component = React.createElement(ConsonantBtn);
  });

  it('should create a new instance of ConsonantBtn', function () {
    expect(component).toBeDefined();
  });
});
