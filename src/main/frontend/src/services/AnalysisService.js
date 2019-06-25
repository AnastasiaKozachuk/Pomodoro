import axios from 'axios';

class AnalysisService {

  getUser(){
      return localStorage.getItem('username');
  }
  testData = [
  /*  {
        "taskTitle": "Write an essey",
        "taskDescription": "For english classes",
        "creationDate" : "25.06.2019",
        "isStarted":false,
        "isPaused":false,
        "isFinished":false,
        "performanceTime": 0,
        "userLogin":"john_smith83"
    },
    {
        "taskTitle": "Clean up the apartment",
        "taskDescription": "",
        "creationDate" : "25.06.2019",
        "isStarted":true,
        "isPaused":false,
        "isFinished":false,
        "performanceTime": 15,        
        "userLogin":"john_smith83"
    },
    {
        "taskTitle": "Make tasks for exams",
        "taskDescription": "Math,Physics",
        "creationDate" : "25.06.2019",
        "isStarted":true,
        "isPaused":true,
        "isFinished":false,
        "performanceTime": 120,
        "userLogin":"john_smith83"
    }*/
    {
        "taskTitle": "Inform about licence renewal",
        "taskDescription": "In this task the goal lies in answering the client about the licence renewal",
        "creationDate" : "25.06.2019",
        "isStarted":false,
        "isPaused":false,
        "isFinished":false,
        "performanceTime": 0,
        "userLogin":"john_smith83"
    },
    {
        "taskTitle": "Fix issue",
        "taskDescription": "An issue was detected when passing even numbers to the component that needs to be fixed",
        "creationDate" : "25.06.2019",
        "isStarted":true,
        "isPaused":false,
        "isFinished":false,
        "performanceTime": 15,        
        "userLogin":"john_smith83"
    }
]

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
