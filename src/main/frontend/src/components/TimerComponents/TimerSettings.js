import React, {Component} from "react";
import axios from 'axios';
import './TimerSettings.css';


import SettingsElement from './SettingsElement'

export default class Settings extends Component {

    duration_default = 25;
    break_duration_default = 5;
    set_size_default = 4;
    set_break_duration_default = 30;



    constructor(props){
        super(props);
        this.duration_ref = React.createRef();
        this.break_duration_ref = React.createRef();
        this.set_size_ref = React.createRef();
        this.set_break_duration_ref = React.createRef();
    }

    state = {
        duration : this.duration_default,
        break_duration : this.break_duration_default,
        set_size : this.set_size_default,
        set_break_duration : this.set_break_duration_default
    };

    onUpdateDuration = (val) => {
        this.setState({
            duration: val
        })
    };

    onUpdateBreakDuration = (val) => {
        this.setState({
            break_duration: val
        })
    };

    onUpdateSetSize = (val) => {
        this.setState({
            set_size: val
        })
    };

    onUpdateSetBreakDuration = (val) => {
        this.setState({
            set_break_duration: val
        })
    };

    onClick = (event) => {
        this.duration_ref.current.SetDefault(this.duration_default);
        this.break_duration_ref.current.SetDefault(this.break_duration_default);
        this.set_size_ref.current.SetDefault(this.set_size_default);
        this.set_break_duration_ref.current.SetDefault(this.set_break_duration_default);

    };

    setEvent = () => {
        let data = JSON.stringify({
            timeOfPomidor:  this.state.duration,
            timeOfSmallBreak: this.state.break_duration,
            timeOfBigBreak:  this.state.set_size,
            amountOfPomidors: this.state.set_break_duration,
            amountOfPomidorForBigBreaks : 4
        });

        //add path here
        axios.post("updateUser", data).then(() => {
            console.log("Successfully set");
        });
    };

    render() {

        return (
            <div className="container_timer-settings">
                <div className="table-background">
                    <div className="title_timer-settings">Timer Settings</div>
                </div>

                <SettingsElement onUpdate={this.onUpdateDuration} ref={this.duration_ref}  labelName={"Pomodoro duration"} label={this.duration_default}/>
                <SettingsElement onUpdate={this.onUpdateBreakDuration} ref={this.break_duration_ref} labelName={"Pomodoro break duration"} label={this.break_duration_default}/>
                <SettingsElement onUpdate={this.onUpdateSetSize} ref={this.set_size_ref} labelName={"Pomodoro set size"} label={this.set_size_default}/>
                <SettingsElement onUpdate={this.onUpdateSetBreakDuration}ref={this.set_break_duration_ref} labelName={"Pomodoro set break duration"} label={this.set_break_duration_default}/>
                <div className="buttons-container">
                    <button className="default-button" onClick={this.onClick}> Default </button>
                    <button className="set-button" onClick={this.setEvent}> Set </button>
                </div>
            </div>
        );
    }


}