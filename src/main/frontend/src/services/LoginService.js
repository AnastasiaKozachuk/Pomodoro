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

    createAccount(data) {
        return axios.post("http://localhost:8080/user/registration", {
            "login": data.login,
            "firstName": data.firstName,
            "secondName": data.lastName,
            "password": "{noop}" + data.password,
            "email": data.email,
            "timeOfPomidor": 25,
            "timeOfSmallBreak": 5,
            "timeOfBigBreak": 25,
            "amountOfPomidors": 14,
            "amountOfPomidorForBigBreaks": 4
        });
    };
}

export default LoginService;