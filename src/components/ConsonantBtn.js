'use strict';

var React = require('react/addons');

var Actions = require('actions/CountdownActionCreators');

require('styles/ConsonantBtn.scss');

var ConsonantBtn = React.createClass({
  addConsonant: function() {
    Actions.addConsonant();
  },

  render: function () {
    return (
      <button id="consonants" onClick={this.addConsonant}>
        CONSONANT
      </button>
    );
  }
});

module.exports = ConsonantBtn; 

