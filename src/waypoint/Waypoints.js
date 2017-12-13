import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Waypoints extends Component {
    constructor(props){
        super(props);
        this.state = {
            isInView: false
        }

    }

    onEnter({ previousPosition }){
        if( previousPosition === 'below'){
            this.setState({
                isInView: true
            })
        }
    }

    render(){
        return(
            <div>
            <Waypoint onEnter={this.onEnter.bind(this)} />
            {this.props.children({ isInView: this.state.isInView })}
            </div>
        )
    }
}

export default Waypoints;