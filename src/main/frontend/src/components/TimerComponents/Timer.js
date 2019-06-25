import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            running: false,
            minutes: 0,
            seconds: 0,
            isWork: false,
            pomodors: 0,
            timeOfPomidor: this.props.timeOfPomidor,
            timeOfSmallBreak: this.props.timeOfSmallBreak,
            timeOfBigBreak: this.props.timeOfBigBreak,
            amountOfPomidors: this.props.amountOfPomidors,
            amountOfPomidorForBigBreaks: this.props.amountOfPomidorForBigBreaks
        };

        this.startTimer = this.startTimer.bind(this);
    }

    componentWillMount(){
        let saved = localStorage.getItem('endTime') && localStorage.getItem('running') !== false;
        //If started already, get time from localStorage
        if(saved && !isNaN(saved)){
            this.state.date = localStorage.getItem('endTime');
            const date = this.calculateCountdown(this.state.date);
            date ? this.setState(date) : this.stop();
        }
    }

    componentDidMount() {
        //If started already, get time from localStorage
        if(localStorage.getItem('running') === 'true'){
            this.startTimer();
        }

    }

    componentWillUnmount() {
        //Add time to server
        //this.stop();
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('endTime', nextState.date);
        localStorage.setItem('running', nextState.running);
    }

    calculateCountdown = (endDate) => {

        console.log("End date: ", endDate);
        console.log("Date.parse(new Date()) = ", Date.parse(new Date()));

        let difference = endDate - Date.parse(new Date());

        console.log("Difference = ", difference);

        // clear countdown when date is reached
        if (difference <= 0) return false;

        const timeLeft = {
            running: true,
            minutes: 0,
            seconds: 0,
            date: endDate
        };

        timeLeft.seconds = Math.floor((difference/1000)%60);
        timeLeft.minutes = Math.floor((difference/1000/60)%60);

        console.log("Time left: ", timeLeft);

        return timeLeft;
    };

    stop = () => {
        this.state.running = false;
        localStorage.setItem('running', this.state.running);
        clearInterval(this.interval);
        localStorage.clear();
        this.blinkTab("Time!");
    };

    pauseTimer = () => {
        this.state.running = false;
        localStorage.setItem('running', this.state.running);
        clearInterval(this.interval);
    };

    startTimer = () => {
        this.state.running = true;
        localStorage.setItem('running', this.state.running);
        // update every second
        this.interval = setInterval(() => {
            const today = new Date();
            const endTime = (this.state.date)?this.state.date:today.setMinutes(today.getMinutes()+this.state.timeOfPomidor);
            const date = this.calculateCountdown(endTime);
            date ? this.setState(date) : this.stop();
        }, 1000);
    };

        blinkTab = function(message) {
            /* save original title */
            let oldTitle = document.title,
                timeoutId,

                /* function to BLINK browser tab */
                blink = function() { document.title = (document.title === message) ? oldTitle : message; },

                /* function to set title back to original */
                clear = function() {
                    clearInterval(timeoutId);
                    document.title = oldTitle;
                    window.onmousemove = null;
                    timeoutId = null;
                };

            if (!timeoutId) {
                timeoutId = setInterval(blink, 1000);
                /* stop changing title on moving the mouse */
                window.onmousemove = clear;
            }
        };

    addLeadingZeros = (value) => {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    };


    render() {

        const countDown = this.state;

        return (

            <>
                <div className="Timer_container-info">
                    <button className="Timer_button-tool" onClick={this.startTimer}>Start</button>
                    <button className="Timer_button-tool" onClick={this.pauseTimer}>Pause</button>
                </div>
                <div className="Timer_container-time">
                    <div className="Timer_pomodoro-current-time">
                        <div className="Timer_pomodoro-time-container">
                            <span className="minutes">{this.addLeadingZeros(countDown.minutes)}</span>:
                        </div>
                        <div className="Timer_pomodoro-time-container">
                            <span className="seconds">{this.addLeadingZeros(countDown.seconds)}</span>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Timer);