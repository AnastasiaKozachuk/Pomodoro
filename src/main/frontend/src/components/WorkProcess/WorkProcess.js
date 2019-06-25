import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './WorkProcess.css';
import Task from '../TasksComponents/Tasks'
import Timer from '../TimerComponents/Timer'

class WorkProcess extends Component {

    state = {
        timeOfPomidor: 25,
        timeOfSmallBreak: 5,
        timeOfBigBreak: 30,
        amountOfPomidors: 20,
        amountOfPomidorForBigBreaks: 4
    };

    createTaskItems = () => {
        
        let tasks = [];

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
                    <Timer
                        timeOfPomidor={this.state.timeOfPomidor}
                        timeOfSmallBreak={this.state.timeOfSmallBreak}
                        timeOfBigBreak={this.state.timeOfBigBreak}
                        amountOfPomidors={this.state.amountOfPomidors}
                        amountOfPomidorForBigBreaks={this.state.amountOfPomidorForBigBreaks}/>
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
