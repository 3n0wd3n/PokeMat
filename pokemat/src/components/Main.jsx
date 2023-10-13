import { Link } from "react-router-dom";
import { MainFlagContainer, MainFooter, MainContactInfo, MainOfferContainerItemImage, MainOfferContainerItem, MainOfferContainer, MainBoldYellowBrigth, MainBoldDark, MainOfferHeading, MainContactHeading, MainContact, MainOffer, MainHideBg, MainBoldYellow, MainMapHeading, Container, MainMap, MainHeaderContainer, MainIntroText, MainIntroHeading, MainAbout, MainAboutHeading } from "./Main.style"
import { Fade, Zoom } from "react-awesome-reveal";
import bg from '../../public/intro-bg-cards.png'
import usa from "../assets/america.png";
import cz from "../assets/czech-republic.svg";
import hideBg from '../../public/hide-background.jpg';
import React, { useState } from 'react';

export default function Main() {
    const [translate, setTranslate] = useState(false);
    return (
        <>  
            <MainFlagContainer>
              {
                translate ?
                  <img onClick={() => setTranslate(!translate)} src={usa} alt="USA Flag" height="30px" width="30px" />
                  :
                  <img onClick={() => setTranslate(!translate)} src={cz} alt="CZ Flag" height="30px" width="30px" />
              }
            </MainFlagContainer>
            <MainHeaderContainer>
                <img src={bg}></img>
                <MainIntroHeading>PokeMat</MainIntroHeading>
                {
                    translate ?
                    <MainIntroText>Vítej na naší stránce plné Pokémon dobrodružství! <MainBoldYellow>Prozkoumejte svět Pokémonů prostřednictvím našeho jedinečného automatu</MainBoldYellow>, kde můžete zakoupit exkluzivní Pokémon karty a rozšířit svou sbírku. <MainBoldYellow>Každá karta je jedinečná</MainBoldYellow> a přináší s sebou vzrušující příběh.</MainIntroText>
                    :
                    <MainIntroText>Welcome to our site full of Pokémon adventures! <MainBoldYellow>Explore the world of Pokémon through our unique slot</MainBoldYellow> where you can purchase exclusive Pokémon cards to expand your collection. <MainBoldYellow>Each card is unique</MainBoldYellow> and comes with an exciting story.</MainIntroText>
                }
            </MainHeaderContainer>
            <MainHideBg>
                <img src={hideBg}></img>
            </MainHideBg>
            {/* <Container> */}
                <MainAbout>
                    {
                        translate ?
                        <>
                            <MainAboutHeading>O nás</MainAboutHeading>
                            <p><MainBoldDark>Jsme skupinka nadšenců</MainBoldDark> Pokémonů, kteří se spojili, aby přinesli radost <MainBoldDark>a</MainBoldDark> dobrodružství do vašeho života. Naše <MainBoldDark>vášeň pro Pokémony nás vedla k vytvoření tohoto projektu</MainBoldDark>, kde pomocí našeho automatu můžete, sbírat a vyměňovat Pokémon karty.</p>
                        </>
                        :
                        <>
                            <MainAboutHeading>About Us</MainAboutHeading>
                            <p><MainBoldDark>We are a group of</MainBoldDark> Pokemon enthusiasts who have come together to bring <MainBoldDark>joy and</MainBoldDark> adventure into your life. Our <MainBoldDark>passion for Pokémon led us to create this project</MainBoldDark> where you can collect and exchange Pokémon cards using our slot machine.</p>
                        </>
                    }
                </MainAbout>
                <MainMap>
                    {
                        translate ?
                        <>
                            <MainMapHeading>Kde nás najdeš</MainMapHeading>
                            <p>Náš automat můžete vyzkoušet <MainBoldYellowBrigth>v nákupním středisku Olympia kousek od Olomouce</MainBoldYellowBrigth>. Zdarma se tam dostanete Olympia autobusem.</p>
                        </>
                        :
                        <>
                            <MainMapHeading>Where to find us</MainMapHeading>
                            <p>You can try our machine <MainBoldYellowBrigth>in the Olympia shopping center near Olomouc</MainBoldYellowBrigth>. You can get there for free on the Olympia bus.</p>
                        </>
                    }
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.030738269645!2d17.304393304197685!3d49.55944317947807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124d978edc1ed7%3A0x79308fa1f579282d!2sObchodn%C3%AD%20centrum%20Olympia%20Olomouc!5e0!3m2!1scs!2scz!4v1697125032496!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </MainMap>
            {/* </Container> */}
            {/* mapa */}
            <MainOffer>
                {
                    translate ?
                    <>
                        <MainOfferHeading>Co u nás najdeš</MainOfferHeading>
                        <p>Tohle jsou základní balíčky, které v našem automatu můžeš najít.</p>
                    </>
                    :
                    <>
                        <MainOfferHeading>What you can find with us</MainOfferHeading>
                        <p>These are the basic packages that you can find in our machine.</p>
                    </>
                }
                <MainOfferContainer>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                    <MainOfferContainerItem>
                        <MainOfferContainerItemImage></MainOfferContainerItemImage>
                    </MainOfferContainerItem>
                </MainOfferContainer>
            </MainOffer>
            <MainContact>
                {
                    translate ?
                    <>
                        <MainContactHeading>Kontaktuj nás</MainContactHeading>
                        <p><MainBoldYellowBrigth>Máte otázky</MainBoldYellowBrigth> nebo chcete sdílet své Pokémon dojmy s námi? <MainBoldYellowBrigth>Nebojte se nám napsat!</MainBoldYellowBrigth> Jsme tady pro vás a rádi vám pomůžeme s čímkoli spojeným s naším projektem.</p>
                        <MainContactInfo>
                            <MainBoldYellowBrigth>Kontaktní osoba:</MainBoldYellowBrigth><span> Daniel Holý</span>
                            <MainBoldYellowBrigth>IČO:</MainBoldYellowBrigth><span> 19778732</span>
                            <MainBoldYellowBrigth>Email:</MainBoldYellowBrigth><span> cardmat@info.cz</span>
                        </MainContactInfo>
                    </>
                    :
                    <>
                        <MainContactHeading>Contact us</MainContactHeading>
                        <p><MainBoldYellowBrigth>Got questions</MainBoldYellowBrigth> or want to share your Pokemon impressions with us? <MainBoldYellowBrigth>Don't be afraid to write to us!</MainBoldYellowBrigth> We are here for you and happy to help you with anything related to our project.</p>
                        <MainContactInfo>
                            <MainBoldYellowBrigth>Contact person:</MainBoldYellowBrigth><span> Daniel Holý</span>
                            <MainBoldYellowBrigth>ID:</MainBoldYellowBrigth><span> 19778732</span>
                            <MainBoldYellowBrigth>Email:</MainBoldYellowBrigth><span> cardmat@info.cz</span>
                        </MainContactInfo>
                    </>
                }
            </MainContact>
            <MainFooter>
                {
                    translate ?
                    <>
                        &copy; 2023 www.poke-mat.vercel.app - Všechna práva vyhrazena
                    </>
                    :
                    <>
                        &copy; 2023 www.poke-mat.vercel.app - All rights reserved
                    </>

                }
                <MainBoldYellowBrigth><span><Link to="/">Back To Home</Link></span></MainBoldYellowBrigth>
            </MainFooter>
        </>
    )
}