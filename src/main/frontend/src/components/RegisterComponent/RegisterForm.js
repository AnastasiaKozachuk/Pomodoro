import React, {Component} from 'react';
import './RegisterForm.css';
import LoginService from "../../services/LoginService";
import {Link} from "react-router-dom";

class CreateAccount extends Component {

    loginService = new LoginService();

    state = {
        firstName: '',
        email: '',
        lastName: '',
        login: '',
        password: ''
    };

    

    updateFirstName = (evt) => {
        this.setState({
            firstName: evt.target.value
        });
    };


    updateLastName = (evt) => {
        this.setState({
            lastName: evt.target.value
        });
    };

    updateEmail = (evt) => {
        this.setState({
            email: evt.target.value
        });
    };

    updatePassword = (evt) => {
        this.setState({
            password: evt.target.value
        });
    };

    updateLogin = (evt) => {
        this.setState({
            login: evt.target.value
        });
    };

    createAccountEvent = () => {
        this.loginService.createAccount(this.state)
            .then((({data: {token, role, username}}) => {


                console.log("Authenticated : " + token);
                console.log("Role : " + role);
                console.log("Username : " + username);

                this.props.save(token, role, true, username);

                localStorage.clear();
                localStorage.setItem("myToken", token);
                localStorage.setItem("role", role);
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("username",username);

                const {history} = this.props;
                history.push("/dashboard/pomodoro");


            }));
    };

    render() {
        return (
            <div className="register_container">
                <h2 className="register_title">
                    Create an account
                </h2>
                <br/>
                <form>
                    <div>
                        <input className="register_input"
                               type="text"
                               onChange={(evt) => this.updateFirstName(evt)}
                               placeholder="First Name"/>
                    </div>
                    <div>
                        <input className="register_input"
                               type="text"
                               onChange={(evt) => this.updateLastName(evt)}
                               placeholder="Last Name"/>
                    </div>
                    <div>
                        <input className="register_input"
                               type="email"
                               onChange={(evt) => this.updateEmail(evt)}
                               placeholder="Email"/>
                    </div>
                    <div>
                        <input className="register_input"
                               type="email"
                               onChange={(evt) => this.updateEmail(evt)}
                               placeholder="Login"/>
                    </div>
                    <div>
                        <input className="register_input"
                               type="password"
                               onChange={(evt) => this.updatePassword(evt)}
                               placeholder="Password"/>
                    </div>
                    <br/>
                    <div>
                        <Link to="/">
                            <button className="register_button-outlined">
                                BACK
                            </button>
                        </Link>
                        <button className="register_button"
                                type="button"
                                onClick={this.createAccountEvent}
                        >Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default CreateAccount;
