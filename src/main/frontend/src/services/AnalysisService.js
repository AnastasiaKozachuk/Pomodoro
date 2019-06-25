import axios from 'axios';

class AnalysisService {

  getUser(){
      return localStorage.getItem('username');
  }
  testData = []

  getUncompletedTasks() {


  /*  const testdata = [
        this.createAnalysisItem('Task1','Desc1','23.06.2019', 200),
        this.createAnalysisItem('Task2','Desc1','23.06.2019', 120),
        this.createAnalysisItem('Task3', 'Desc1','23.06.2019',300)
    ]; */
      /*try {
            return axios.get('/task/uncompletedTasks?userId='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        } 
      */
      var filtered = this.testData.filter(function(value, index, arr){
        
            return value.isFinished == false;
        
        });
      return filtered;
    }

    getCompletedTasks() {  
      /*  try {
            return axios.get('/task/completedTasks?userId='+this.getUser());
           
          } catch (error) {
            console.error(error)           
          }*/
          var filtered = this.testData.filter(function(value, index, arr){
            
                return value.isFinished == true;
            
            });
          return filtered;
    }

    getUnstartedTasks() {  
   /*     try {
            return axios.get('/task/notStartedTasks?userId='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }*/
        var filtered = this.testData.filter(function(value, index, arr){
            
                return value.isStarted == false;
            
            });
          return filtered;
    }

    getStartedAndUncompletedTasks() {  
     /*   try {
            return axios.get('/task/startedAndUncompletedTasks?userId='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }*/
        var filtered = this.testData.filter(function(value, index, arr){
            
                return (value.isFinished == false)&&(value.isStarted == true);
            
            });
          return filtered;
    }

    getPausedTasks() {  
      /*  try {
            return axios.get('/task/pausedTasks?userId='+this.getUser());
                
        } catch (error) {
            console.error(error)           
        }*/
        var filtered = this.testData.filter(function(value, index, arr){
            
                return value.isPaused== true;
            
            });
          return filtered;
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
