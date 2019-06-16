import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './WorkProcess.css';
import Task from '../TasksComponents/Tasks'
import Timer from '../TimerComponents/Timer'
//import pomodoroService from "../../services/PomodoroService";

class WorkProcess extends Component {

    //pomodoroService = new pomodoroService();

    state = {};


    componentDidMount() {
        //this.getTimerInfo();
    }

    getTimerInfo = () => {};

    getTasks = () => {

    };

    createTaskItems = () => {
        //test data
        let tasks = [
            {
                active: "Active",
                title: "My Title 1",
                description: "Description",
                isStarted:"Yes",
                isPaused: "No",
                isDone: "No",
                performanceTime: "00:00:00"
            },
            {
                active: "",
                title: "My Title 2",
                description: "Description",
                isStarted:"Yes",
                isPaused: "No",
                isDone: "No",
                performanceTime: "00:00:30"
            }
            ,
            {
                active: "",
                title: "My Title 2",
                description: "Description",
                isStarted:"Yes",
                isPaused: "No",
                isDone: "No",
                performanceTime: "00:00:30"
            }
            ,
            {
                active: "",
                title: "My Title 2",
                description: "Description",
                isStarted:"Yes",
                isPaused: "No",
                isDone: "No",
                performanceTime: "00:00:30"
            }
        ];

        if (tasks.length === 0) {
            return (
                <>
                </>
            );
        }
        let result = [];
        tasks.forEach((task) => {
            result.push(this.createTaskItem(task));
        });
        return (result);
    };

    createTaskItem = (task) => {
        return (
            <Task title={task.title}
                  description={task.description}
                  isStarted={task.isStarted}
                  isPaused={task.isPaused}
                  isDone = {task.isDone}
                  performanceTime={task.performanceTime}
                  active={task.active}
            />
        );
    };



    render() {

        return (
            <div className="WorkProcess_container">
                <div className="Timer_container">
                    <Timer/>
                </div>
                <div className="Tasks_container">
                    {this.createTaskItems()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(WorkProcess);