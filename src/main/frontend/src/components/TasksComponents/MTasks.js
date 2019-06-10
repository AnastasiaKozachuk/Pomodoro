import React, {Component} from 'react';
//import pomodoroService from "../../services/PomodoroService";
import connect from "react-redux/es/connect/connect";
import './Tasks.css';

class Tasks extends Component {

    //pomodoroService = new pomodoroService();

    state = {

    };


    componentDidMount() {
        //this.getTimerInfo();
    }

    getTimerInfo = () => {};


    render() {

        const classOfContainer = "Task_container"+ " " + this.props.active;

        return (
            <div className={classOfContainer}>
                <div className="Task_title">
                    {this.props.title}
                </div>
                <div className="Task_tools">
                    <div className="Task_button-tool">Edit</div>
                    <div className="Task_button-tool">Delete</div>
                </div>
                <div className="Task_time-spent">
                    {this.props.performanceTime}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Tasks);