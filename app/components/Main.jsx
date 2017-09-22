var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = React.createClass({
    render: function() {
        return (
            <div>
              <div>
                  <div>
                      <Nav></Nav>
                      Main.jsx Rendered
                      {this.props.children}
                  </div>
              </div>
            </div>
       )
    }
});

module.exports = Main;
