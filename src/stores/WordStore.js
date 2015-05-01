'use strict';

var Reflux = require('reflux');
var Actions = require('actions/CountdownActionCreators');

var dictionary = require('../data/dictionary.json');

var words = [];
var wordIndex = 0;

var WordStore = Reflux.createStore({
  listenables: Actions,

  onSolve: function(letters) {
    if (letters.length < 9) {
      return;
    }
    if (!words.length) {
      var partialMatches = this.partialMatches(letters, dictionary.words);
      var matches = this.match(letters, partialMatches);
      words = matches.sort(function(a, b) { return b.length - a.length; });
    } else {
      wordIndex = (wordIndex + 1) % words.length;
    }
    this.trigger(words[wordIndex]);
  },

  onNewGame: function() {
    words = [];
    wordIndex = 0;
    this.trigger();
  },

  partialMatches: function(letters, dict) {
    var regexp = new RegExp('\\b([' + letters.join('') + ']+)\\b', 'g');
    return dict.toUpperCase().match(regexp);
  },

  match: function(letters, matches) {
    var results = [];
    matches.forEach(function(match) {
      var word = match;
      letters.forEach(function(letter) {
        word = word.replace(letter, '');
      });
      if (!word.length) { results.push(match); }
    });
    return results;
  }

});

module.exports = WordStore; 
