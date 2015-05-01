'use strict';

require('styles/Letters.scss');

var React = require('react/addons');
var Reflux = require('Reflux'); 

var LetterStore = require('stores/LetterStore');

var Letters = React.createClass({
  mixins: [Reflux.connect(LetterStore, 'letters')],

  render: function () {
    var letters = this.state.letters || [];
    var listLetters = (new Array(9).fill('')).map(function(letter, i) {
      return (
        <li key={i} className="letter">{letters[i] || ''}</li>
      );
    });
    return (
      <ul className="letters">
        {listLetters}
      </ul>
    );
  }
});

module.exports = Letters; 

