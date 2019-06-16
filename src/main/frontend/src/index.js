import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/mainReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/header";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


