import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './TaskManager.css';
import Task from '../TasksComponents/MTasks'

class TaskManager extends Component {

    state = {
        newTaskName: "",
        newTaskDescription: "",
        tasks: []
    };


    componentDidMount() {
    }

    getTasks = () => {

    };

    createNameValue = (event) => {
        this.setState(
            {
                newTaskName: event.target.value
            }
        )
    };

    createDescription = (event) => {
        this.setState(
            {
                newTaskDescription: event.target.value
            }
        )
    };

    createNewTask = () => {
        console.log("New task created!")
    };

    createTaskItems = () => {
        //test data
        let tasks = [
            {
                active: "",
                title: "Inform about licence renewal",
                description: "In this task the goal lies in answering the client about the licence renewal",
                isStarted:"Yes",
                isPaused: "No",
                isDone: "No",
                performanceTime: "00:00:00"
            },
            {
                active: "",
                title: "Fix issue",
                description: "An issue was detected when passing even numbers to the component that needs to be fixed.",
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
            <>
                <div className="TaskManager_container">
                    <div className="table-background">
                        <div className="title_task-manager">
                            Tasks
                        </div>
                    </div>

                        <h1 className="TaskManager_title">Create Task</h1>
                        <div>
                            <input className="MTask-form_top-input"
                                   onChange={this.createNameValue}
                                   type="text"
                                   placeholder="Task Name"/>
                        </div>
                        <div>
                            <textarea className="MTask-form_bottom-input"
                                   onChange={this.createDescription}
                                   placeholder="Description">
                            </textarea>
                        </div>
                        <button className="TaskManager_button"
                                onClick={this.createNewTask}>
                            CREATE
                        </button>

                </div>
                <div className="TaskManager_container-tasks">
                    {this.createTaskItems()}
                </div>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(TaskManager);