'use strict';

require('es6-shim');

var React = require('react/addons');

var Letters = require('components/Letters');
var Solution = require('components/Solution');

var ConsonantBtn = require('components/ConsonantBtn');
var VowelBtn = require('components/VowelBtn');
var SolveBtn = require('components/SolveBtn');
var ResetBtn = require('components/ResetBtn');


// CSS
require('normalize.css');
require('../styles/main.css');

var ReactApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Letters />
        <Solution />
        <div className="btn-group selection">
          <VowelBtn />
          <ConsonantBtn />
        </div>
        <div className="btn-group controls">
          <SolveBtn />
          <ResetBtn />
        </div>
      </div>
    );
  }
});

module.exports = ReactApp;
