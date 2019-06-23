import axios from 'axios';

class LoginService {

    login(username, password) {
        return axios.post("http://localhost:8080/auth/signIn", {
            "username": username,
            "password": password
        });
    }


    testEvent(token) {
        const headers = {
            "Content-Type": "text/plain",
            'Authorization': "Bearer " + token
        };

        axios.get("http://localhost:8080/auth/test", {headers}).then(function (resp) {
            console.log(resp)
        });
    }

    createAccount(data){
        return axios.post("http://localhost:8080/registration/createEmployer", {
            "login": data.login,
            "firstName": data.firstName,
            "secondName": data.lastName,
            "password": "{noop}" + data.password,
            "email": data.email
        });
    }

    //delete next two if we dont need roles


    createEmployer(data){
        return axios.post("http://localhost:8080/registration/createEmployer", {
            "employerLoginEmail": data.loginEmail,
            "firstName": data.firstName,
            "secondName": data.secondName,
            "lastName": data.lastName,
            "password": "{noop}" + data.password,
            "jobPosition": data.jobPositionValue,
            "companyName": data.companyNameValue,
            "companyWebsite": data.companyWebsiteValue,
            "skype": data.skypeValue,
            "mobilePhone": data.phoneNumberValue
        });
    }

    createEmployee(data){
        return axios.post("http://localhost:8080/registration/createEmployee", {
            "employeeLoginEmail": data.loginEmail,
            "firstName": data.firstName,
            "secondName": data.secondName,
            "lastName": data.lastName,
            "password": "{noop}" + data.password,
            "skype": data.skypeValue,
            "mobilePhone": data.phoneNumberValue,
            "gitHubLink": data.gitHubValue,
            "linkedinLink": data.linkedinValue
        });
    }

}

export default LoginService;