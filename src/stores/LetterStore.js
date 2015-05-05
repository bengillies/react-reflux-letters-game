'use strict';

var Reflux = require('reflux');
var Actions = require('actions/CountdownActionCreators');
var WordStore = require('stores/WordStore');

var MAX_LETTERS = 9;

var letters = [];

// letter distribution from http://www.thecountdownpage.com/letters.htm
var BASE_CONSONANTS = [].concat(
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
);
var BASE_VOWELS = [].concat(
  new Array(15).fill('A'),
  new Array(21).fill('E'),
  new Array(13).fill('I'),
  new Array(13).fill('O'),
  new Array(5).fill('U')
);

var consonants = Array.from(BASE_CONSONANTS);
var vowels = Array.from(BASE_VOWELS);

var hidingLetters = false;

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

  onSetLetter: function(position, letter) {
    letter = letter.toUpperCase();
    if (!hidingLetters && letter.length === 1) {
      letters[position] = letter;
      this.trigger(letters);
      return 'omg';
    }
  },

  onNewGame: function() {
    letters = [];
    consonants = Array.from(BASE_CONSONANTS);
    vowels = Array.from(BASE_VOWELS);
    hidingLetters = false;
    this.trigger(letters);
  },

  hideLetters: function(word) {
    if (!word) { return; }
    hidingLetters = true;
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

  randomCharacter: function(letterList) {
    var position = Math.floor(Math.random() * letterList.length);
    return letterList.splice(position, 1)[0];
  }
});

module.exports = LetterStore;
