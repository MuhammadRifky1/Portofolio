import React, { Component } from 'react';
import { 
    Background, 
    ImgCamera, 
    ImgLens, 
    Center, 
    Shutter } from './style';

class Content extends Component {
    render(){
        return(
            <Background>
                <Center>
                   <ImgCamera><Shutter /></ImgCamera>
                </Center>
                    <ImgLens src={require('assets/lens.png')} />
            </Background>
        )
    }
}

export default Content;