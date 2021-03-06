import styled, { css } from 'styled-components';

export const ImgTxt = styled.p`
    position: relative;
    font-size: 1.8em;
    text-align: justify;
    color: #414141;
    margin-bottom: 25px;
    &:after {
        
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: tomato;

        transform-origin: right;
        transform: rotateY(0deg);

        transition: transform 3s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(90deg);
        }
    `}


`;