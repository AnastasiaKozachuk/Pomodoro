import React, {Component} from "react";
import './Analysis.css';
import AnalysisService from '../../services/AnalysisService';

import AnalysisTableElement from './AnalysisTableElement'

export default class Analysis extends Component {

    analysisService = new AnalysisService();

    state = {
        completedTasks: this.analysisService.getCompletedTasks(),
        uncompletedTasks: this.analysisService.getUncompletedTasks(),
        unstartedTasks: this.analysisService.getUnstartedTasks(),
        startedAndUncompletedTasks: this.analysisService.getStartedAndUncompletedTasks(),
        pausedTasks: this.analysisService.getPausedTasks()
    };  

    render() {

        return (
            <div className="analysis-container">
                <div className="table-background">
                    <div className="title-analysis">Analysis</div>
                </div>
                <div className="table-container">
                <div className="sub-title">Completed tasks :</div>  
                <AnalysisTableElement analysisData={this.state.completedTasks}/>
              
                <div className="sub-title">Uncompleted tasks :</div>  
                <AnalysisTableElement analysisData={this.state.uncompletedTasks}/>
             
                <div className="sub-title">Unstarted tasks :</div>  
                <AnalysisTableElement analysisData={this.state.unstartedTasks}/>
             
                <div className="sub-title">Started and uncompleted tasks :</div>  
                <AnalysisTableElement analysisData={this.state.startedAndUncompletedTasks}/>
             
                <div className="sub-title">Paused tasks :</div>  
                <AnalysisTableElement analysisData={this.state.pausedTasks}/>
                </div>
            </div>
        );
    }

    


}