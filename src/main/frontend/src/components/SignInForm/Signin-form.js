import React, {Component} from 'react';
import './Signin-form.css';
import {Link} from 'react-router-dom';
import LoginService from '../../services/LoginService';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {save} from '../../reducer/actions';

class Signin extends Component {

    loginService = new LoginService();

    state = {
        loginValue: '',
        passwordValue: '',
        token: this.props.token,
        role: this.props.role,
        isAuthenticated: false,
        username: ''
    };

    loginEvent = () => {
        const {loginValue, passwordValue} = this.state;

        this.loginService.login(loginValue, passwordValue)
            .then((({data: {token, role, username}}) => {


                console.log("Authenticated : " + token);
                console.log("Role : " + role);
                console.log("Username : " + username);

                this.props.save(token, role, true, username);

                localStorage.clear();
                localStorage.setItem("myToken", token);
                localStorage.setItem("role", role);
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("username", username);

                const {history} = this.props;

                if (role === "EMPLOYEE") {
                    history.push("/dashboardEmployee/profile");
                } else {
                    history.push("/dashboardEmployer/profile");
                }
            }));
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

    testEvent = () => {
        const {token} = this.state;
        this.loginService.testEvent(token);
    };

    render() {
        return (
            <div className="Signin-form_container">
                <h2 className="Signin-form_title">
                    Sign in
                </h2>
                <br/>
                <form>
                    <div>
                        <input className="Signin-form_input"
                               onChange={(evt) => this.updateInputValue(evt)}
                               type="text"
                               placeholder="Login (email)"/>
                    </div>
                    <div>
                        <input className="Signin-form_input"
                               onChange={(evt) => this.updatePasswordValue(evt)}
                               type="password"
                               placeholder="Password"/>
                    </div>
                    <div>
                        <Link className="Signin-form_link" to="/createAccount">Don't have an account</Link>
                    </div>
                    <br/>
                    <div>
                        <Link to="/">
                            <button className="Signin-form_button-outlined">
                                BACK
                            </button>
                        </Link>
                        <button className="Signin-form_button" type="button" onClick={this.loginEvent}>Login</button>
                    </div>
                </form>
            </div>
        );
    }

    componentDidUpdate() {

        const stateToken = this.state.token;
        const stateRole = this.state.role;

        const propsToken = this.props.token;
        const propsRole = this.props.role;

        if ((stateToken !== propsToken) || (stateRole !== propsRole)) {

            this.setState({
                token: this.props.token,
                role: this.props.role,
                isAuthenticated: this.props.isAuthenticated,
                username:this.props.username
            });

        }

    }
}

const mapStateToProps = (state) => {
    return state;
};

function mapDispatchToProps(dispatch) {
    return (bindActionCreators({
        save: (token, role, isAuthenticated,username) => save(token, role, isAuthenticated,username)
    }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
