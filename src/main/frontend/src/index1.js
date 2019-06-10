import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends Component {


    state = {
        loginValue: '',
        passwordValue: '',
        username: '',
        token: ''
    };


    loginEvent = () => {

        const {loginValue, passwordValue} = this.state;

        axios.post("http://localhost:8080/auth/signIn",
            {"username": loginValue, "password": passwordValue})
            .then(({data: {token, username}}) => {
                this.setState({
                    token,
                    username
                });
                console.log("Authenticated : " + token)
            });

    };

    testEvent = () => {

        const {token} = this.state;


        const headers = {
            "Content-Type": "text/plain",
            'Authorization': "Bearer " + token
        };

        axios.get("http://localhost:8080/auth/test", {headers}).then(function (resp) {
            console.log(resp)
        })


    };

    updateInputValue = (evt) => {

        this.setState({
            loginValue: evt.target.value
        });

    };

    updatePasswordValue = (evt) => {

        this.setState({
            passwordValue: evt.target.value
        });
    };

    render() {


        const styleGen = {
            "textAlign": "center",
            "marginTop": "150px"
        };

        const styleInput = {
            "margin": "30px auto",
            "maxWidth": "200px"
        };

        const btnStyle = {
            "margin": "10px"
        };

        return (
            <div style={styleGen}>
                <h1>Login page</h1>
                <form>
                    <div className="form-group">
                        <input style={styleInput}
                               value={this.state.loginValue}
                               onChange={(evt) => this.updateInputValue(evt)}
                               type="text"
                               className="form-control"
                               placeholder="Login"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.passwordValue}
                            onChange={(evt) => this.updatePasswordValue(evt)}
                            style={styleInput}
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <button style={btnStyle} className="btn btn-info" type="button"
                                onClick={this.loginEvent}>Login
                        </button>
                        <button style={btnStyle} className="btn btn-info" type="button" onClick={this.testEvent}>Test
                            auth
                        </button>
                    </div>
                </form>
            </div>
        );

    };
}

ReactDOM.render(<Login/>, document.getElementById("root"));