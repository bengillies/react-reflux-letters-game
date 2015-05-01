'use strict';

describe('WordStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/WordStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
