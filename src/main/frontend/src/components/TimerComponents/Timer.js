import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './Timer.css';
import Countdown from 'react-countdown-now';
import MyTimer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const Completionist = () => <span>Tea time</span>;

const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return <span>{minutes}:{seconds}</span>;
    }
};

class Timer extends Component {


    componentDidMount() {}

    getTimerInfo = () => {};

    runTimer = () => {};


    render() {

        return (
            <>

                <div className="Timer_container-time">
                    <div className="Timer_pomodoro-current-time">
                        <Countdown
                            date={Date.now() + 1500000}
                            renderer={renderer}
                            zeroPadTime={2}
                        />
                    </div>
                </div>
                <div className="Timer_container-info">
                    <div className="Timer_pomodoro-time-container">
                        <div className="Timer_title">Pomodoro count:</div>
                        <div className="Timer_title">Break:</div>
                    </div>
                    <div className="Timer_pomodoro-time-container">
                        <div className="Timer_pomodoro-time">1</div>
                        <div className="Timer_pomodoro-time">05:00</div>
                    </div>

                    <div className="Timer_pomodoro-time-container">
                        <div className="Timer_title">Total work:</div>
                        <div className="Timer_title">Total break:</div>
                    </div>
                    <div className="Timer_pomodoro-time-container">
                        <div className="Timer_pomodoro-time">
                            <MyTimer active duration={null}>
                                <Timecode />
                            </MyTimer>
                        </div>
                        <div className="Timer_pomodoro-time">
                            <div className="Timer_pomodoro-time">
                                <MyTimer active duration={null}>
                                    <Timecode />
                                </MyTimer>
                            </div>
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