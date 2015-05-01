'use strict';

var React = require('react/addons');
var Reflux = require('Reflux'); 

var Actions = require('actions/CountdownActionCreators');
var LetterStore = require('stores/LetterStore');

require('styles/SolveBtn.scss');

var SolveBtn = React.createClass({
  mixins: [Reflux.connect(LetterStore, 'letters')],

  solve: function() {
    Actions.solve(this.state.letters);
  },

  render: function () {
    return (
      <button className="solve" onClick={this.solve}>SOLVE</button>
    );
  }
});

module.exports = SolveBtn; 

