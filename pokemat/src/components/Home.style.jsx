import styled, { keyframes } from 'styled-components';

export const HomeMainContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 100vw;
    flex-direction: column;
    background-color: #242424;
    gap: 64px;
`;
  
export const rotateslide = keyframes`   
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
  
export const HomeRotationContainer = styled.div`
    animation: ${rotateslide} 9s linear infinite;
    & > img {
        width: 200px;
        height: auto;
        cursor: pointer;
        transition: all .6s;
        &:hover{
            transform: scale(1.1);
            filter: drop-shadow(0 0 32px #61dafbaa);
        }
    }
`;

export const HomeH1 = styled.h1`
    color: white;
    padding: 8px 32px;
    background-color: white;
    border-radius: 70px;
    color: #242424;
    font-size: 18px;
    transition: all .6s;
    &:hover{
        filter: drop-shadow(0 0 8px #fff);
    }
`;