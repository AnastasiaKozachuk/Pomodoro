import axios from 'axios';

class AnalysisService {

  getUser(){
      return localStorage.getItem('username');
  }

   getCompletedTasks() {

  /*  const testdata = [
        this.createAnalysisItem('Task1','Desc1','23.06.2019', 200),
        this.createAnalysisItem('Task2','Desc1','23.06.2019', 120),
        this.createAnalysisItem('Task3', 'Desc1','23.06.2019',300)
    ]; */
        try {
            
            return axios.get('/task/completedTasks?username='+this.getUser());
           
          } catch (error) {
            console.error(error)           
          }
    }

    getUncompletedTasks() {  
        try {
            return axios.get('/task/uncompletedTasks?username='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }
    }

    getUnstartedTasks() {  
        try {
            return axios.get('/task/notStartedTasks?username='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }
    }

    getStartedAndUncompletedTasks() {  
        try {
            return axios.get('/task/startedAndUncompletedTasks?username='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }
    }

    getPausedTasks() {  
        try {
            return axios.get('/task/pausedTasks?username='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }
    }

            

    
    createAnalysisItem(name,descrition, date,tt) {
        return {
            taskTitle : name,
            taskDescription : descrition,
            creationDate : date,
            performanceTime: tt
        };
    }
}



export default AnalysisService;
