import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './Tasks.css';

class Tasks extends Component {


    state = {

    };


    componentDidMount() {
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
                    <div className="Task_button-tool">Activate</div>
                    <div className="Task_button-tool">Done</div>
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