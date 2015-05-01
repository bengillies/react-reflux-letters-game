'use strict';

var React = require('react/addons');

var Actions = require('actions/CountdownActionCreators');

require('styles/VowelBtn.scss');

var VowelBtn = React.createClass({
  addVowel: function() {
    Actions.addVowel();
  },

  render: function () {
    return (
      <button id="vowels" onClick={this.addVowel}>
        VOWEL
      </button>
      );
  }
});

module.exports = VowelBtn; 

