'use strict';

var Reflux = require('reflux');

var CountdownActionCreators  =  Reflux.createActions([
  'addConsonant',
  'addVowel',
  'setLetter',
  'solve',
  'newGame'
]);


module.exports = CountdownActionCreators; 
