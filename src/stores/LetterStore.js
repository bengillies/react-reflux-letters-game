'use strict';

var Reflux = require('reflux');
var Actions = require('actions/CountdownActionCreators');
var WordStore = require('stores/WordStore');

var MAX_LETTERS = 9;

var letters = [];

// letter distribution from http://www.thecountdownpage.com/letters.htm
var consonants = [].concat(
  new Array(2).fill('B'),
  new Array(3).fill('C'),
  new Array(6).fill('D'),
  new Array(2).fill('F'),
  new Array(3).fill('G'),
  new Array(2).fill('H'),
  new Array(1).fill('J'),
  new Array(1).fill('K'),
  new Array(5).fill('L'),
  new Array(4).fill('M'),
  new Array(8).fill('N'),
  new Array(4).fill('P'),
  new Array(1).fill('Q'),
  new Array(9).fill('R'),
  new Array(9).fill('S'),
  new Array(9).fill('T'),
  new Array(1).fill('V'),
  new Array(1).fill('W'),
  new Array(1).fill('X'),
  new Array(1).fill('Y'),
  new Array(1).fill('Z')
).join('');
var vowels = [].concat(
  new Array(15).fill('A'),
  new Array(21).fill('E'),
  new Array(13).fill('I'),
  new Array(13).fill('O'),
  new Array(5).fill('U')
).join('');

var LetterStore = Reflux.createStore({
  listenables: Actions,

  init: function() {
    this.listenTo(WordStore, this.hideLetters);
  },

  onAddConsonant: function() {
    if (letters.length < MAX_LETTERS) {
      this.trigger(this.addCharacter(consonants));
    }
  },

  onAddVowel: function() {
    if (letters.length < MAX_LETTERS) {
      this.trigger(this.addCharacter(vowels));
    }
  },

  onNewGame: function() {
    letters = [];
    this.trigger(letters);
  },

  hideLetters: function(word) {
    if (!word) { return; }
    var lettersWithHoles = [].concat(letters);
    word.split('').forEach(function(letter) {
      var index = lettersWithHoles.indexOf(letter);
      if (index >= 0) {
        lettersWithHoles.splice(index, 1, '');
      }
    });
    this.trigger(lettersWithHoles);
  },

  addCharacter: function(str) {
    letters.push(this.randomCharacter(str));
    return letters;
  },

  randomCharacter: function(str) {
    var position = Math.floor(Math.random() * str.length);
    return str.charAt(position);
  }
});

module.exports = LetterStore;
