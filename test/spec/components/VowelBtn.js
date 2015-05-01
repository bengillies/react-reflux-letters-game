'use strict';

describe('VowelBtn', function () {
  var React = require('react/addons');
  var VowelBtn, component;

  beforeEach(function () {
    VowelBtn = require('components/VowelBtn.js');
    component = React.createElement(VowelBtn);
  });

  it('should create a new instance of VowelBtn', function () {
    expect(component).toBeDefined();
  });
});
