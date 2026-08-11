import { Deck, Fragment, Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Mafs, Plot, Theme } from 'mafs';
import RevealMath from 'reveal.js/plugin/math';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css';
import './App.css';
import CoordinateSystems from './slides/CoordinateSystems/CoordinateSystems';
import NumberLine from './slides/NumberLine/NumberLine';

function App() {
    return (
        <Deck
            config={{
                width: 1600,
                height: 900,
                margin: 0.06,
                center: false,
                katex: {
                    local: 'node_modules/katex',
                    macros: {
                        '\\celsius': '\\,^{\\circ}\\mathrm{C}',
                    },
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
            <CoordinateSystems />

            <Slide>
                <h2>Lineare Funktionen</h2>

                {String.raw`\[f(x) = mx + n\]`}

                <Mafs viewBox={{ x: [-5, 10], y: [-3, 3] }} height={570}>
                    <Coordinates.Cartesian subdivisions={4} />
                    <Plot.OfX y={(x) => (1 / 2) * x + 1} color={Theme.green} weight={3}></Plot.OfX>
                    <Plot.OfX y={(x) => -x + 2} color={Theme.violet} weight={3}></Plot.OfX>

                    <g style={{ fontSize: '0.7em' }}>
                        <LaTeX
                            tex={String.raw`f(x) = \dfrac{1}{2}x + 1`}
                            at={[5.5, 2]}
                            color={Theme.green}
                        ></LaTeX>
                        <LaTeX
                            tex={String.raw`g(x) = -x + 2`}
                            at={[7, -2]}
                            color={Theme.violet}
                        ></LaTeX>
                    </g>
                </Mafs>
            </Slide>

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
                            Gegeben sind die Funktionen {String.raw`\(f(x) = 3x + 2\)`} und{' '}
                            {String.raw`\(g(x) = -0,5x + 4\)`}.
                            <ol className="sub-tasks">
                                <li>
                                    Berechne jeweils {String.raw`\(f(0)\)`}, {String.raw`\(f(2)\)`}{' '}
                                    und {String.raw`\(f(-1)\)`}.
                                </li>
                                <li>
                                    Bestimme Anstieg und Achsenabschnitt der beiden Funktionen und
                                    zeichne beide Funktionsgraphen anhand von je zwei Punkten.
                                </li>
                                <li>
                                    Berechne jeweils die Nullstellen von {String.raw`\(f(x)\)`} und{' '}
                                    {String.raw`\(g(x)\)`} und vergleiche sie mit der Zeichnung.
                                </li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Berechne die Nullstelle von {String.raw`\(h(x) = 3x - 9\)`}. Was
                            bedeutet die Nullstelle graphisch?
                        </li>
                    </Fragment>
                </ol>
            </Slide>

            <Slide>
                <h2>Lineare Funktionen</h2>

                <ol className="main-tasks">
                    <li>
                        Eine Gerade verläuft durch die Punkte {String.raw`\((0,1)\)`} und{' '}
                        {String.raw`\((2,5)\)`}. Bestimme die zugehörige Funktionsgleichung.
                    </li>

                    <Fragment>
                        <li>
                            Berechne den Schnittpunkt der Geraden {String.raw`\(f(x)=x+2\)`} und{' '}
                            {String.raw`\(g(x)=-2x+8\)`}.
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Gegeben ist die Funktion {String.raw`\(f(x)=3x-1\)`}. Bestimme jeweils
                            die Gleichung der Gerade, die durch den Punkt {String.raw`\((2,0)\)`}{' '}
                            und
                            <ol className="sub-tasks">
                                <li>parallel zu {String.raw`\(f\)`} verläuft.</li>
                                <li>senkrecht zu {String.raw`\(f\)`} verläuft.</li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Ein Sensor misst Temperaturwerte, die linear mit der Zeit ansteigen. Bei{' '}
                            {String.raw`\(t = 0\,\mathrm{min}\)`} zeigt er{' '}
                            {String.raw`\(18\celsius\)`}, bei {String.raw`\(t = 10\,\mathrm{min}\)`}{' '}
                            zeigt er {String.raw`\(23\celsius\)`}.
                        </li>

                        <ol className="sub-tasks">
                            <li>Stelle die Funktionsgleichung auf.</li>
                            <li>
                                Berechne die Temperatur bei {String.raw`\(t = 25\,\mathrm{min}\)`}.
                            </li>
                            <li>Nach welcher Zeit werden {String.raw`\(30\celsius\)`} erreicht?</li>
                        </ol>
                    </Fragment>
                </ol>
            </Slide>
        </Deck>
    );
}

export default App;
