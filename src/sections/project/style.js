import styled from 'styled-components';

export const Background = styled.div`

    height: 300vh;
    background: url('${require('assets/awan.png')}') no-repeat;
    background-size: cover;
    background-position: top;
    
    
`;

export const Center = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;


export const ImgCamera = styled.div`

    background: url('${require('assets/camera.png')}') no-repeat;
    width: 550px;
    height: 450px;
    z-index: 2;
    background-size: 90%;
    margin: 0 auto;
    position: relative;

`;

export const Shutter = styled.button`

    background-color: #42A5F5;
    border: none;
    width: 70px;
    height: 15px;
    border-radius: 15px 15px 0px 0px;
    position: absolute;
    left: 10%;
    top: 12%;
    cursor: pointer;

`;






export const ImgLens = styled.img`

    width: 15%;
    height: auto;
    position: fixed;
    z-index: 99;
    top: 35%;
    left: 44%;


`;