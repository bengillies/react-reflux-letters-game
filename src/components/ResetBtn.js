'use strict';

var React = require('react/addons');

var Actions = require('actions/CountdownActionCreators');

require('styles/ResetBtn.scss');

var ResetBtn = React.createClass({

  reset: function() {
    Actions.newGame();
  },

  render: function () {
    return (
      <button className="reset" onClick={this.reset}>RESET</button>
    );
  }
});

module.exports = ResetBtn; 

