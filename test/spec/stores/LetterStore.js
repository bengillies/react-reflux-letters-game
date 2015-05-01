'use strict';

describe('LetterStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/LetterStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
