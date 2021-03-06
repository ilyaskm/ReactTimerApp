var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and start countdonw', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);

        });
        it('timer should never show negative number', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleCountdown(2);
            expect(countdown.state.count).toBe(2);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);

        });

    })
})
