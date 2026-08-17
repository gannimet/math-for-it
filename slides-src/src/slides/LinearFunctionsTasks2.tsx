import { Fragment, Slide } from '@revealjs/react';
import MathEl from '../common/MathEl';

export default function LinearFunctionsTasks2() {
    return (
        <Slide>
            <h2>Lineare Funktionen</h2>

            <div className="r-stretch">
                <ol className="main-tasks">
                    <li>
                        Berechne den Schnittpunkt der Geraden <MathEl tex={String.raw`f(x)=x+2`} />{' '}
                        und <MathEl tex={String.raw`g(x)=-2x+8`} />.
                    </li>

                    <Fragment>
                        <li>
                            Gegeben ist die Funktion <MathEl tex={String.raw`f(x)=3x-1`} />.
                            Bestimme jeweils die Gleichung der Gerade, die durch den Punkt{' '}
                            <MathEl tex={String.raw`(2,0)`} /> und
                            <ol className="sub-tasks">
                                <li>
                                    parallel zu <MathEl tex={String.raw`f`} /> verläuft.
                                </li>
                                <li>
                                    senkrecht zu <MathEl tex={String.raw`f`} /> verläuft.
                                </li>
                            </ol>
                        </li>
                    </Fragment>

                    <Fragment>
                        <li>
                            Ein Sensor misst Temperaturwerte, die linear mit der Zeit ansteigen. Bei{' '}
                            <MathEl tex={String.raw`t = 0\,\mathrm{min}`} /> zeigt er{' '}
                            <MathEl tex={String.raw`18\celsius`} />, bei{' '}
                            <MathEl tex={String.raw`t = 10\,\mathrm{min}`} /> zeigt er{' '}
                            <MathEl tex={String.raw`23\celsius`} />.
                        </li>

                        <ol className="sub-tasks">
                            <li>Stelle die Funktionsgleichung auf.</li>
                            <li>
                                Berechne die Temperatur bei{' '}
                                <MathEl tex={String.raw`t = 25\,\mathrm{min}`} />.
                            </li>
                            <li>
                                Nach welcher Zeit werden <MathEl tex={String.raw`30\celsius`} />{' '}
                                erreicht?
                            </li>
                        </ol>
                    </Fragment>
                </ol>
            </div>
        </Slide>
    );
}
