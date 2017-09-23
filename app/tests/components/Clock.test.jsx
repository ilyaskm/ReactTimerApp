var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
       it('should render clock to output', () => {
           var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
           var $el = $(ReactDOM.findDOMNode(clock));
           var expected = $el.find('.clock-text').text();

           expect(expected).toBe('01:02');
       });
       it('should render clock with default values', () => {
           var clock = TestUtils.renderIntoDocument(<Clock />);
           var $el = $(ReactDOM.findDOMNode(clock));
           var expected = $el.find('.clock-text').text();

           expect(expected).toBe('00:00');
       });

    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var seconds = 615;
            var expected = '10:15';
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
        it('should format seconds when min/sec < 10', () => {
            var seconds = 61;
            var expected = '01:01';
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    })
});
