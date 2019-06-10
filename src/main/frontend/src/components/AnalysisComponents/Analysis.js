import React, {Component} from "react";
import './Analysis.css';

export default class Analysis extends Component {


    state = {
        analysisData: [
            this.createAnalysisItem('Task1', 200),
            this.createAnalysisItem('Task2', 120),
            this.createAnalysisItem('Task3', 300)
        ]
    };

    createAnalysisItem(name, tt) {
        return {
            name: name,
            totalTime: tt
        };
    }

    renderTable = () => {
        return this.state.analysisData.map(value => {
            return (
                <tr key={value.name}>
                    <td>{value.name}</td>
                    <td className="td-totaltime">{value.totalTime}</td>
                </tr>
            )
        })
    };

    render() {

        return (
            <div className="container">
                <div className="table-background">
                    <div className="title-analysis">Analysis</div>
                </div>
                <div className="sub-title">Done tasks :</div>
                <table>
                    <tbody>
                    <tr>
                        <td>Task name</td>
                        <td>Total spent time</td>
                    </tr>
                    {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }


}