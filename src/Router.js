import React, { Component } from 'react';
import {
    BrowserRouter as Routes,
    Route
} from 'react-router-dom';
import Main from 'Main';
import Project from 'Project';

class Router extends Component {
    render(){
        return(
            <Routes>
                <div>
                 <Route exact path="/" component={Main} />
                 <Route path="/project" component={Project} />
                </div>
            </Routes>
        )
    }
}

export default Router;