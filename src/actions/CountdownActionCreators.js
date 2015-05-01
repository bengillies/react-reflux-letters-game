'use strict';

var Reflux = require('reflux');

var CountdownActionCreators  =  Reflux.createActions([
  'addConsonant',
  'addVowel',
  'solve',
  'newGame'
]);


module.exports = CountdownActionCreators; 
