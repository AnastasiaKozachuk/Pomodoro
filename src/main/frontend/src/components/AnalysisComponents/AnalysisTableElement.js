import React, {Component} from "react";
import './Analysis.css';


export default class AnalysisTableElement extends Component {


    state = {
        analysisData: this.props.analysisData
    };
    
    renderTable = () => {
        if(Array.isArray(this.state.analysisData)){
        return this.state.analysisData.map(value => {
            return (
                <tr key={value.taskTitle}>
                    <td>{value.taskTitle}</td>
                    <td>{value.taskDescription}</td>
                    <td>{value.creationDate}</td>
                    <td className="td-totaltime">{value.performanceTime}</td>
                </tr>
            )
        });
    }
    return;
    };

    render() {
        
                return ( 
                        <table>
                            <tbody>
                            <tr>
                                <td>Task name</td>
                                <td>Description</td>
                                <td>Creation date</td>
                                <td>Total spent time</td>
                            </tr>
                            {this.renderTable()}
                            </tbody>
                        </table>
                );
            }





    }
    