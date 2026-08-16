import { Slide } from '@revealjs/react';
import { Coordinates, Mafs, Text, useMovablePoint } from 'mafs';
import MathEl from '../common/MathEl';
import './NumberLine.css';

function NumberLine() {
    const point1D = useMovablePoint([2, 0], {
        constrain: 'horizontal',
    });

    return (
        <>
            <Slide>
                <h2>Zahlen und Achsen</h2>

                <div className="r-stretch">
                    <Mafs viewBox={{ x: [-10, 10], y: [-0.5, 1] }} height={200}>
                        <Coordinates.Cartesian yAxis={false} />
                        <Text x={0} y={0} attach="n" attachDistance={36} size={40}>
                            0
                        </Text>

                        <Text x={point1D.x} y={0} attach="n" attachDistance={-50} size={45}>
                            {point1D.x.toFixed(2)}
                        </Text>

                        {point1D.element}
                    </Mafs>

                    <div className="number-sets">
                        <div className="set fragment">
                            <div className="set-symbol">
                                <MathEl tex={String.raw`\mathbb{N}`} />
                            </div>
                            <div className="set-name">Natürliche Zahlen</div>
                            <div className="set-examples fragment">
                                <MathEl tex={String.raw`1, 2, 3`} />
                            </div>
                        </div>

                        <div className="set fragment">
                            <div className="set-symbol">
                                <MathEl tex={String.raw`\mathbb{Z}`} />
                            </div>
                            <div className="set-name">Ganze Zahlen</div>
                            <div className="set-examples fragment">
                                <MathEl tex={String.raw`-1, 1, -27`} />
                            </div>
                        </div>

                        <div className="set fragment">
                            <div className="set-symbol">
                                <MathEl tex={String.raw`\mathbb{Q}`} />
                            </div>
                            <div className="set-name">Rationale Zahlen</div>
                            <div className="set-examples fragment">
                                <MathEl tex={String.raw`\dfrac{2}{3}, -5, -\dfrac{23}{87}`} />
                            </div>
                        </div>

                        <div className="set fragment">
                            <div className="set-symbol">
                                <MathEl tex={String.raw`\mathbb{R}`} />
                            </div>
                            <div className="set-name">Reelle Zahlen</div>
                            <div className="set-examples fragment">
                                <MathEl tex={String.raw`\pi, 13, \sqrt{2}`} />
                            </div>
                        </div>

                        <div className="set fragment">
                            <div className="set-symbol">
                                <MathEl tex={String.raw`\mathbb{C}`} />
                            </div>
                            <div className="set-name">Komplexe Zahlen</div>
                            <div className="set-examples fragment">
                                <MathEl tex={String.raw`2 + 5i, -8, \dfrac{1}{3}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    );
}

export default NumberLine;
