import React, {Component} from "react";
import './SettingsElement.css';

export default class ItemAddForm extends Component {

    state = {
        label: this.props.label
    };

    OnLabelChange = (event) => {

        this.setState(
            {
                label: event.target.value
            }
        )

    };

    SetDefault= (prop) =>{
        this.setState(
            {
                label: prop
            }
        )
    };

    render() {
        return (
            <div className="settings-body">
                <span className="label-name"> {this.props.labelName} : </span>
                <input className="settings-input" type="text" onChange={this.OnLabelChange}
                       value={this.state.label}/> min
            </div>
        );
    }


}