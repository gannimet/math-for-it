import { Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Line, Mafs, Theme, useMovablePoint } from 'mafs';
import { useState } from 'react';
import Math from '../common/Math';

function LinearFunctionsIntro() {
    const yIntercept = useMovablePoint([0, 1], { constrain: 'vertical' });
    const [slope, setSlope] = useState(1);

    return (
        <Slide>
            <h2>Lineare Funktionen</h2>

            <Math tex={String.raw`f(x) = mx + n`} asBlock={true} />

            <div style={{ position: 'relative' }}>
                <Mafs viewBox={{ x: [-5, 10], y: [-3, 3] }} height={570} zoom={true}>
                    <Coordinates.Cartesian subdivisions={4} />
                    <Line.PointSlope point={yIntercept.point} slope={slope} color={Theme.green} />

                    <g style={{ fontSize: '0.7em' }}>
                        <LaTeX
                            tex={String.raw`f(x) = ${slope.toFixed(1)} x + ${yIntercept.y.toFixed(2)}`}
                            at={[5.5, 2]}
                            color={Theme.green}
                        ></LaTeX>
                    </g>

                    {yIntercept.element}
                </Mafs>

                <div
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        color: 'white',
                        fontFamily: 'CMU Serif',
                    }}
                >
                    <span>Anstieg:</span>
                    <input
                        type="range"
                        min="-3"
                        max="3"
                        step="0.1"
                        value={slope}
                        onChange={(e) => setSlope(Number(e.target.value))}
                    />
                </div>
            </div>
        </Slide>
    );
}

export default LinearFunctionsIntro;
