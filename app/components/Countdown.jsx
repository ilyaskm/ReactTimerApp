var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {count: 0,
        countdownStatus: 'stopped'};
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                  this.startTimer();
                  break;
                case 'stopped':
                  this.stopTimer();
                  break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count > 0 ? this.state.count - 1 : 0;
            this.setState({
                count : newCount
            });
        }, 1000);
    },
    stopTimer: function() {

    },

    handleCountdown: function(seconds) {
        this.setState(
            {count : seconds,
            countdownStatus: 'started'}
        )
    },
   render: function() {
       var {count} = this.state;
       return (
         <div>
             <Clock totalSeconds={count} />
             <CountdownForm onSetCountdown={this.handleCountdown} />
         </div>
       );
   }
});

module.exports = Countdown;
