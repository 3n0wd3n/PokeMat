import styled, { keyframes } from "styled-components";

export const MainHeaderContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 75vh;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(13%);
  }
`;

export const MainIntroText = styled.p`
  position: absolute;
  text-align: center;
  top: 20vh;
  font-size: 24px;
  color: white;
  font-weight: 100;
  padding: 15px;
  width: 50vw;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    top: 18vh;
    width: 60vw;
  }
`;
export const MainIntroHeading = styled.h1`
  position: absolute;
  top: 10vh;
  font-size: 64px;
  color: #ffcb05;
  @media screen and (max-width: 500px) {
    top: 8vh;
  }
`;

export const MainAbout = styled.section`
  background-color: #ffcb05;
  margin: 0;
  min-height: 30vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  color: #222222;
  padding: 36px;
  margin-top: 30vh;
  & > p {
    color: white;
    font-size: 24px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const MainHideBg = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  & > img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    filter: brightness(20%);
  }
`;

export const MainFlagContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 3;

  img {
    transition: transform 0.7s ease-in-out;
    animation: rotation1 1s;
  }

  @keyframes rotation1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(10deg);
    }
  }

  &:hover > img {
    transform: rotate(15deg);
  }
`;

export const MainAboutHeading = styled.h2`
  font-size: 64px;
  line-height: normal;
`;

export const MainBoldYellow = styled.span`
  font-weight: 900;
  color: #caa306;
`;

export const MainBoldYellowBrigth = styled.span`
  font-weight: 900;
  color: #ffcb05;
`;

export const MainBoldDark = styled(MainBoldYellow)`
  color: #222222;
`;

export const MainMapHeading = styled(MainAboutHeading)`
  font-size: 64px;
`;

export const MainOfferHeading = styled(MainAboutHeading)`
  font-size: 64px;
`;

export const MainContactHeading = styled(MainAboutHeading)`
  font-size: 64px;
`;

export const MainMap = styled.section`
  color: #222222;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 36px;
  background-color: white;
  min-height: 100vh;
  align-items: flex-start;
  position: relative;
  & > p {
    font-size: 24px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainOffer = styled.section`
  background-color: #a2c5ac;
  padding: 36px;
  color: white;
  margin-top: 35vh;
  & > p {
    font-size: 24px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const MainOfferContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 23px;
  overflow-x: scroll;
  flex-direction: row;
  margin: 20px 0 0 0;
`;

export const MainOfferContainerItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 411px;
  width: 270px;
  background-color: white;
  border-radius: 8px;
`;

export const MainOfferContainerItemImage = styled.div`
  height: 149px;
  width: 270px;
  background-color: white;
  border-radius: 8px;
`;

export const MainContact = styled.section`
  background-color: #264653;
  display: flex;
  padding: 36px;
  & > img {
    height: auto;
    width: 50vw;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const MainContactContainer = styled.div`
  color: white;
  & > p {
    font-size: 24px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const MainContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  & > span {
    font-size: 16px;
  }
`;

export const MainFooter = styled.footer`
  min-height: 5vh;
  max-width: 100vw;
  padding: 36px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  flex-direction: column;
  & > span {
    color: #caa306;
  }
`;
