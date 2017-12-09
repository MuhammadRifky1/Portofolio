import React, { Component } from 'react';
import {
    BrowserRouter as Routes,
    Route
} from 'react-router-dom';
import App from './App';

class Router extends Component {
    render(){
        return(
            <Routes>
                <Route path="/" component={App} />
            </Routes>
        )
    }
}

export default Router;