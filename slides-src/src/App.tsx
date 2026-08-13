import { Deck, Fragment, Slide } from '@revealjs/react';
import RevealMath from 'reveal.js/plugin/math';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css';
import './App.css';
import Math from './common/Math';
import { LATEX_MACROS } from './latex.macros';
import BinomialPerspective from './slides/BinomialPerspective';
import CoordinateSystems from './slides/CoordinateSystems';
import LinearFunctionsIntro from './slides/LinearFunctionsIntro';
import NumberLine from './slides/NumberLine';
import PositionalNotation from './slides/PositionalNotation';

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
                <h2>Mathematik als Fundament</h2>
                <h3>Grundlagen für IT und Programmierung</h3>
            </Slide>

            <NumberLine />
            <PositionalNotation />
            <BinomialPerspective />
            <CoordinateSystems />
            <LinearFunctionsIntro />

            <Slide>
                <h2>Lineare Funktionen</h2>

                <ol className="main-tasks">
                    <li>
                        Ein Programmierkurs kostet 50 € Anmeldegebühr plus 8 € pro Kursstunde.
                        Stelle eine lineare Funktion für die Gesamtkosten in Abhängigkeit von der
                        Stundenzahl auf und berechne die Kosten für 12 Stunden.
                    </li>

                    <Fragment>
                        <li>
                            Gegeben sind die Funktionen <Math tex={String.raw`f(x) = 3x + 2`} /> und{' '}
                            <Math tex={String.raw`g(x) = -0,5x + 4`} />.
                            <ol className="sub-tasks">
                                <li>
                                    Berechne jeweils <Math tex={String.raw`f(0)`} />,{' '}
                                    <Math tex={String.raw`f(2)`} /> und{' '}
                                    <Math tex={String.raw`f(-1)`} />.
                                </li>
                                <li>
                                    Bestimme Anstieg und Achsenabschnitt der beiden Funktionen und
                                    zeichne beide Funktionsgraphen anhand von je zwei Punkten.
                                </li>
                                <li>
                                    Berechne jeweils die Nullstellen von{' '}
                                    <Math tex={String.raw`f(x)`} /> und{' '}
                                    <Math tex={String.raw`g(x)`} /> und vergleiche sie mit der
                                    Zeichnung.
                                </li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Eine Gerade verläuft durch die Punkte <Math tex={String.raw`(0,1)`} />{' '}
                            und <Math tex={String.raw`(2,5)`} />. Bestimme die zugehörige
                            Funktionsgleichung.
                        </li>
                    </Fragment>
                </ol>
            </Slide>

            <Slide>
                <h2>Lineare Funktionen</h2>

                <ol className="main-tasks">
                    <li>
                        Berechne den Schnittpunkt der Geraden <Math tex={String.raw`f(x)=x+2`} />{' '}
                        und <Math tex={String.raw`g(x)=-2x+8`} />.
                    </li>

                    <Fragment>
                        <li>
                            Gegeben ist die Funktion <Math tex={String.raw`f(x)=3x-1`} />. Bestimme
                            jeweils die Gleichung der Gerade, die durch den Punkt{' '}
                            <Math tex={String.raw`(2,0)`} /> und
                            <ol className="sub-tasks">
                                <li>
                                    parallel zu <Math tex={String.raw`f`} /> verläuft.
                                </li>
                                <li>
                                    senkrecht zu <Math tex={String.raw`f`} /> verläuft.
                                </li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Ein Sensor misst Temperaturwerte, die linear mit der Zeit ansteigen. Bei{' '}
                            <Math tex={String.raw`t = 0\,\mathrm{min}`} /> zeigt er{' '}
                            <Math tex={String.raw`18\celsius`} />, bei{' '}
                            <Math tex={String.raw`t = 10\,\mathrm{min}`} /> zeigt er{' '}
                            <Math tex={String.raw`23\celsius`} />.
                        </li>

                        <ol className="sub-tasks">
                            <li>Stelle die Funktionsgleichung auf.</li>
                            <li>
                                Berechne die Temperatur bei{' '}
                                <Math tex={String.raw`t = 25\,\mathrm{min}`} />.
                            </li>
                            <li>
                                Nach welcher Zeit werden <Math tex={String.raw`30\celsius`} />{' '}
                                erreicht?
                            </li>
                        </ol>
                    </Fragment>
                </ol>
            </Slide>
        </Deck>
    );
}

export default App;
