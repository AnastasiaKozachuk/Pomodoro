import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './Tasks.css';

class Tasks extends Component {


    constructor(props) {
        super(props);

        this.state = {

        };

        this.activateTask = this.activateTask.bind(this);
        this.markDone = this.markDone.bind(this);
    }


    componentDidMount() {
    }

    activateTask = (event) =>{
        let parent = event.target.parentElement.parentElement;
        let parentClassList = parent.classList;
        (parentClassList.contains('Active'))?parent.classList.remove('Active'):parent.classList.add('Active');
    };

    markDone = (event) =>{
        console.log("Done");
        event.target.parentElement.parentElement.style.display = "none";
    };

    render() {

        const classOfContainer = "Task_container"+ " " + this.props.active;

        return (
            <div className={classOfContainer}>
                <div className="Task_title">
                    {this.props.title}
                </div>
                <div className="Task_tools">
                    <button className="Task_button-tool"
                            onClick={this.activateTask}>
                        Activate
                    </button>
                    <button className="Task_button-tool"
                            onClick={this.markDone}>
                        Done
                    </button>
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