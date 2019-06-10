import React, {Component} from "react";
import './TimerSettings.css';


import SettingsElement from './SettingsElement'

export default class Settings extends Component {

    duration = 25;
    break_duration = 5;
    set_size = 4;
    set_break_duration = 30;



    constructor(props){
        super(props);
        this.duration_ref = React.createRef();
        this.break_duration_ref = React.createRef();
        this.set_size_ref = React.createRef();
        this.set_break_duration_ref = React.createRef();
    }

    onClick = (event) => {
        this.duration_ref.current.SetDefault(this.duration);
        this.break_duration_ref.current.SetDefault(this.break_duration);
        this.set_size_ref.current.SetDefault(this.set_size);
        this.set_break_duration_ref.current.SetDefault(this.set_break_duration);

    }

    render() {

        return (
            <div className="container">
                <div className="title">Timer Settings</div>
                <SettingsElement ref={this.duration_ref}  labelName={"Pomodoro duration"} label={this.duration}/>
                <SettingsElement ref={this.break_duration_ref} labelName={"Pomodoro break duration"} label={this.break_duration}/>
                <SettingsElement ref={this.set_size_ref} labelName={"Pomodoro set size"} label={this.set_size}/>
                <SettingsElement ref={this.set_break_duration_ref} labelName={"Pomodoro set break duration"} label={this.set_break_duration}/>
                <div className="buttons-container">
                    <button className="default-button" onClick={this.onClick}> Default </button>
                    <button className="set-button" /* TODO: onClick={sent to server}*/> Set </button>
                </div>
            </div>
        );
    }


}