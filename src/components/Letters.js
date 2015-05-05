'use strict';

require('styles/Letters.scss');

var React = require('react/addons');
var Reflux = require('Reflux'); 

var LetterStore = require('stores/LetterStore');
var Actions = require('actions/CountdownActionCreators');

var Letters = React.createClass({
  mixins: [Reflux.connect(LetterStore, 'letters')],

  highlight: function(ev) {
    ev.target.select();
  },

  setLetter: function(ev) {
    var index = parseInt(ev.target.getAttribute('data-position'), 10);
    var nextInput = ev.target.parentNode.parentNode
      .querySelector('[data-position="' + (index + 1) + '"]');
    Actions.setLetter(index, ev.target.value);
      nextInput && nextInput.select();
  },

  render: function () {
    var letters = this.state.letters || [];
    var listLetters = (new Array(9).fill('')).map(function(letter, i) {
      return (
        <li key={i} className="letter">
          <input data-position={i} value={letters[i] || ''} onChange={this.setLetter} onClick={this.highlight} />
        </li>
      );
    }, this);
    return (
      <ul className="letters">
        {listLetters}
      </ul>
    );
  }
});

module.exports = Letters; 

