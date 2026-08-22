import { Deck, Slide } from '@revealjs/react';
import RevealMath from 'reveal.js/plugin/math';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css';
import './App.css';
import { LATEX_MACROS } from './latex.macros';
import BinomialPerspective from './slides/BinomialPerspective';
import CoordinateSystems from './slides/CoordinateSystems';
import LinearFunctionsIntro from './slides/LinearFunctionsIntro';
import LinearFunctionsTasks1 from './slides/LinearFunctionsTasks1';
import LinearFunctionsTasks2 from './slides/LinearFunctionsTasks2';
import NumberLine from './slides/NumberLine';
import PositionalNotation from './slides/PositionalNotation';
import TermsMiscellaneous from './slides/TermsMiscellaneous';
import TrigAstronomy from './slides/TrigAstronomy';
import TrigonometryIntro from './slides/TrigonometryIntro';
import TrigonometryRadians from './slides/TrigonometryRadians';

function App() {
    return (
        <Deck
            config={{
                width: 1600,
                height: 900,
                margin: 0.06,
                center: true,
                katex: {
                    local: 'node_modules/katex',
                    // @ts-ignore
                    macros: LATEX_MACROS,
                },
                slideNumber: true,
                hash: true,
                hashOneBasedIndex: true,
                history: true,
                transition: 'zoom',
                transitionSpeed: 'fast',
                pdfSeparateFragments: false,
            }}
            plugins={[RevealMath.KaTeX]}
        >
            <Slide>
                <h2 className="r-fit-text">Mathematik als Fundament</h2>
                <h3 className="r-fit-text">Grundlagen für IT und Programmierung</h3>
            </Slide>

            <NumberLine />
            <PositionalNotation />
            <CoordinateSystems />
            <BinomialPerspective />
            <TermsMiscellaneous />

            <LinearFunctionsIntro />
            <LinearFunctionsTasks1 />
            <LinearFunctionsTasks2 />

            <TrigonometryIntro />
            <TrigAstronomy />
            <TrigonometryRadians />
        </Deck>
    );
}

export default App;
