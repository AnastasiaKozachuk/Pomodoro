import React, {Component} from 'react';
import './header.css';
import logo from '../images/resfeber_logo.svg';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {save} from "../../reducer/actions";

class Header extends Component {


    logOutEvent = () => {


        this.props.save('', '', false,'');

        localStorage.clear();
        const {history} = this.props;
        history.push("/");
    };


    render() {
        return (
            <div className="hdr-Header_container">
                <ul className="hdr-Header_menu">
                    <li className="hdr-Header_element">
                        <Link className="hdr-Header_link" to="/dashboard/manage-timer">Timer Settings</Link>
                    </li>
                    <li className="hdr-Header_element">
                        <Link className="hdr-Header_link" to="/dashboard/manage-tasks">Task Settings</Link>
                    </li>
                    <li className="hdr-Header_element">
                        <Link className="hdr-Header_link" to="/dashboard/pomodoro">Start</Link>
                    </li>
                    <li className="hdr-Header_element">
                        <Link className="hdr-Header_link" to="/dashboard/analysis">Analysis</Link>
                    </li>
                </ul>
                <button className="hdr-Header_logout-button" onClick={this.logOutEvent}>LOGOUT</button>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

function mapDispatchToProps(dispatch) {
    return (bindActionCreators({
        save: (token, role, isAuthenticated, username) => save(token, role, isAuthenticated, username)
    }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
