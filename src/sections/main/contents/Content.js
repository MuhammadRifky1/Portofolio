import React, { Component } from 'react';
import { ImgTxt } from './style';
import Waypoint from 'waypoint/Waypoints';


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            article: []
        }
    }

    componentWillMount(){
        this.setState({
            article: [
                {
                    data: [''],
                    author: ['John']
                },
                {
                    data: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
                    author: ['John Doe']
                }
            ]
        })
    }  



    render(){
        return(
            <div>
                <Waypoint>
                    {({ isInView }) =>
                    <ImgTxt hide={isInView}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ImgTxt>
                }   
                </Waypoint>
                <Waypoint>
                    {({ isInView }) =>
                    <ImgTxt hide={isInView}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ImgTxt>
                }   
                </Waypoint>
                <Waypoint>
                    {({ isInView }) =>
                    <ImgTxt hide={isInView}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ImgTxt>
                }   
                </Waypoint>
            </div>
        )
    }

}

export default Content;