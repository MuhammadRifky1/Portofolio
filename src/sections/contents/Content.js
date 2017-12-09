import React, { Component } from 'react';

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
                    data: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
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
                {this.state.article.map((x) =>{
                    return(
                        <section>
                            <p>Posted By : {x.author}</p>
                            <p>{x.data}</p><br />
                        </section>
                    )}
                )}
            </div>
        )
    }

}

export default Content;