import React, {Component} from 'react';
import './Home-page.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

library.add(faChevronDown);

class Home extends Component {
    render() {
        return (
            <div className="Home_Pomodoro-container">
                <Link to="/">
                        <div className="Home_Pomodoro-title">POMODORO TIME MANAGEMENT TECHNIQUE</div>
                </Link>
                        <div className="Home_Pomodoro-description">
                            <h1>HOW TO POMODORO</h1><br/>
                            Divide your work day into 25-minute work intervals separated by 5-minute breaks.<br/>
                            These intervals are defined as Pomodoros.<br/>
                            After four Pomodoros take a longer 30-minute break.<br/>
                            This Process loops automatically until the set total amount of Pomodoros is
                            reached.<br/>
                            <Link to="/sign-in">
                            <button className="Home_start-button">START</button>
                            </Link>
                        </div>
            </div>

        );
    }
}

export default Home;
