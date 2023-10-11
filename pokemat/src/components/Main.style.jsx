import styled, { keyframes } from 'styled-components';

export const MainHeaderContainer = styled.div`
    display: flex;
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    justify-content: center;
    align-items: center;
    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(40%); 
    }
`;

export const MainIntro = styled.p`
    position: absolute;
    text-align: center;
    top: 50%;
    font-size: 18px;
    color: white;
    font-weight: 100;
    padding: 15px;
`;
export const MainIntroHeading = styled.h1`
    position: absolute;
    top: 30%;
    font-size: 64px;
    color: #ffcb05;
`;
