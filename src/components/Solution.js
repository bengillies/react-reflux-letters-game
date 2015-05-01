'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

var WordStore = require('stores/WordStore');

require('styles/Solution.scss');

var Solution = React.createClass({
  mixins: [Reflux.connect(WordStore, 'solution')],

  render: function () {
    var answer = this.state.solution || '';
    var solution = (new Array(9).fill('')).map(function(pos, i) {
      return (
        <li key={i} className="letter">{answer.charAt(i) || ''}</li>
      );
    });
    return (
      <ul className="solution">{solution}</ul>
    );
  }
});

module.exports = Solution; 

