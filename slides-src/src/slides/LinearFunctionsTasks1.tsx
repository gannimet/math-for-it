import { Fragment, Slide } from '@revealjs/react';
import MathEl from '../common/MathEl';

export default function LinearFunctionsTasks1() {
    return (
        <Slide>
            <h2>Lineare Funktionen</h2>

            <div className="r-stretch">
                <ol className="main-tasks">
                    <li>
                        Ein Programmierkurs kostet 50 € Anmeldegebühr plus 8 € pro Kursstunde.
                        Stelle eine lineare Funktion für die Gesamtkosten in Abhängigkeit von der
                        Stundenzahl auf und berechne die Kosten für 12 Stunden.
                    </li>

                    <Fragment>
                        <li>
                            Gegeben sind die Funktionen <MathEl tex={String.raw`f(x) = 3x + 2`} />{' '}
                            und <MathEl tex={String.raw`g(x) = -0,5x + 4`} />.
                            <ol className="sub-tasks">
                                <li>
                                    Berechne jeweils <MathEl tex={String.raw`f(0)`} />,{' '}
                                    <MathEl tex={String.raw`f(2)`} /> und{' '}
                                    <MathEl tex={String.raw`f(-1)`} />.
                                </li>
                                <li>
                                    Bestimme Anstieg und Achsenabschnitt der beiden Funktionen und
                                    zeichne beide Funktionsgraphen anhand von je zwei Punkten.
                                </li>
                                <li>
                                    Berechne jeweils die Nullstellen von{' '}
                                    <MathEl tex={String.raw`f(x)`} /> und{' '}
                                    <MathEl tex={String.raw`g(x)`} /> und vergleiche sie mit der
                                    Zeichnung.
                                </li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Eine Gerade verläuft durch die Punkte <MathEl tex={String.raw`(0,1)`} />{' '}
                            und <MathEl tex={String.raw`(2,5)`} />. Bestimme die zugehörige
                            Funktionsgleichung.
                        </li>
                    </Fragment>
                </ol>
            </div>
        </Slide>
    );
}
