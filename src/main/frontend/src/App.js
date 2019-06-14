import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/App.css';

import Home from './components/HomePage/Home-page'
import SigninForm from './components/SignInForm/Signin-form'
import WorkProcess from './components/WorkProcess/WorkProcess'
import TaskManager from './components/TasksComponents/TaskManager'
import Analysis from './components/AnalysisComponents/Analysis'
import TimerSettings from './components/TimerComponents/TimerSettings'
import Header from "./components/Headers/header";
import RegisterForm from './components/RegisterComponent/RegisterForm'


class App extends Component {
    render() {

        const {isAuthenticated, role} = this.props;

        console.log(this.props);

        return (
            <Router>
                <Route path="/" component={Home} exact/>
                <Route path="/sign-in" component={SigninForm}/>
                {/*<Route path="/dashboard" component={Header} />*/}
                <Route path="/dashboard/manage-timer" component={TimerSettings}/>
                <Route path="/dashboard/manage-tasks" component={TaskManager}/>
                <Route path="/dashboard/pomodoro" component={WorkProcess}/>
                <Route path="/dashboard/analysis" component={Analysis}/>
                <Route path="/createAccount" component={RegisterForm}/>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(App);
