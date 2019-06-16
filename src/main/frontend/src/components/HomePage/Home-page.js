import React, {Component} from 'react';
import './Home-page.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

library.add(faChevronDown);

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome!</h1>
            </div>
        );
    }
}

export default Home;
