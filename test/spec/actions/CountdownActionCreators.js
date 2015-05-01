'use strict';

describe('CountdownActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/CountdownActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
