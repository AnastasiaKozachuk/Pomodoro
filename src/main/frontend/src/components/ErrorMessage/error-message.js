import React, {Component} from 'react';
import './error-message.css';
import puzzled from '../images/puzzled.svg';

class ErrorMessage extends Component {
    render(){
        return (
            <div className="OffersEmployee_container">
                <h2 className="ErrorMessage_title">Hmm...looks like you don't have permission to access this page...</h2>
                <br/>
                <img src={puzzled} className="Puzzled" alt="logo"/>
                <br/>
            </div>
        );
    };

}

export default ErrorMessage;