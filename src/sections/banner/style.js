import styled from 'styled-components';

export const ImgWrap = styled.div`

    height: 100vh;
    background-image: url('${require('../../assets/runner.gif')}');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fcfcfc;
    position: relative;
    
    p {
        position: absolute;
        right: 75px;
        top: 100px;
        float: right;
        font-size: 2em;
    }

`;