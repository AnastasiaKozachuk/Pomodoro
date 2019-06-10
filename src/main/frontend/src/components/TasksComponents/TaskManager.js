import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './TaskManager.css';
import Task from '../TasksComponents/MTasks'

class TaskManager extends Component {

    state = {};


    componentDidMount() {
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
            <div className="TaskManager_container">
                <div className="TaskManager_create_container">
                    <div>
                        <input className="Signin-form_input"
                               onChange={(evt) => this.updateNameValue(evt)}
                               type="text"
                               placeholder="Task Name"/>
                    </div>
                    <div>
                        <input className="Signin-form_input"
                               onChange={(evt) => this.updateDescription(evt)}
                               type="textarea"
                               placeholder="Description"/>
                    </div>
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

export default connect(mapStateToProps)(TaskManager);