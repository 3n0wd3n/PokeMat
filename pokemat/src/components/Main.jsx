import { Link } from "react-router-dom";
import { MainHeaderContainer, MainIntro, MainIntroHeading } from "./Main.style"
import { Fade, Zoom } from "react-awesome-reveal";
import bg from '../../public/intro-bg-mix-cards.avif'

export default function Main() {
    return (
        <>  
            <MainHeaderContainer>
                <img src={bg}></img>
                <MainIntroHeading>PokeMat</MainIntroHeading>
                <MainIntro>Vítejte na naší stránce plné Pokémon dobrodružství! Prozkoumejte svět Pokémonů prostřednictvím našeho jedinečného automatu, kde můžete zakoupit exkluzivní Pokémon karty a rozšířit svou sbírku. Každá karta je jedinečná a přináší s sebou vzrušující příběh.</MainIntro>
            </MainHeaderContainer>
            <h2>O nás</h2>
            <p>Jsme skupina nadšenců Pokémonů, kteří se spojili, aby přinesli radost a dobrodružství do vašeho života. Naše vášeň pro Pokémony nás vedla k vytvoření tohoto projektu, kde pomocí našeho automatu můžete, sbírat a vyměňovat Pokémon karty.</p>
            <h2>Kde se automat nachází</h2>
            <p>Náš automat můžete vyzkoušet v nákupním středisku Olympia kousek od Olomouce. Zdarma se tam dostanete Olympia autobusem.</p>
            {/* mapa */}
            <h2>Kontaktuje nás</h2>
            <p>Máte otázky nebo chcete sdílet své Pokémon dojmy s námi? Nebojte se nám napsat! Jsme tady pro vás a rádi vám pomůžeme s čímkoli spojeným s naším projektem.</p>
            <span><Link to="/">Home</Link></span>
        </>
    )
}