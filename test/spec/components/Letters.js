'use strict';

describe('Letters', function () {
  var React = require('react/addons');
  var Letters, component;

  beforeEach(function () {
    Letters = require('components/Letters.js');
    component = React.createElement(Letters);
  });

  it('should create a new instance of Letters', function () {
    expect(component).toBeDefined();
  });
});
