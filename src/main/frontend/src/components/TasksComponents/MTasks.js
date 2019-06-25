import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './MTasks.css';

class MTasks extends Component {

    state = {
        title: this.props.title,
        description: this.props.description
    };

    OnTitleChange = (event) => {
        this.setState(
            {
                title: event.target.value
            }
        )

    };

    OnDescriptionChange = (event) => {
        this.setState(
            {
                description: event.target.value
            }
        )

    };


    SetDefault = (prop) =>{
        this.setState(
            {
                title: prop,
                description: prop
            }
        )
    };

    updateMTask = () => {
        console.log("Task is updated!");
    };

    deleteMTask = () => {
        console.log("Task is deleted!");
    };

    render() {

        return (
            <div className="MTask_container Active">
                <div className="MTask_title">

                        <textarea className="MTask-form_input"
                               onChange={this.OnTitleChange} value={this.state.title}>
                        </textarea>

                </div>
                <div className="MTask_description">

                        <textarea className="MTask-form_input"
                                  onChange={this.OnDescriptionChange}
                                  value={this.state.description}>
                        </textarea>

                </div>
                <div className="MTask_tools">
                    <button className="MTask-form_link"
                            onClick={this.updateMTask}>
                        Edit
                    </button>
                    <button className="MTask-form_danger-link" onClick={this.deleteMTask}>
                        Delete
                    </button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(MTasks);
