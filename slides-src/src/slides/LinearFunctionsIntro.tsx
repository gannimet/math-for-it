import { Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Line, Mafs, Polygon, Theme, useMovablePoint } from 'mafs';
import { useEffect, useState } from 'react';
import MathEl from '../common/MathEl';

function getFunctionEquation(m: number, n: number) {
    const calcSign = n < 0 ? '' : '+';

    return String.raw`f(x) = ${m.toFixed(1)} x ${calcSign} ${n.toFixed(1)}`;
}

function LinearFunctionsIntro() {
    const yIntercept = useMovablePoint([0, 1], {
        constrain: ([_, y]) => {
            return [0, Math.round(y * 10) / 10];
        },
    });

    const triangleAnchor = useMovablePoint([1, 1], {
        constrain: ([x, _]) => {
            return [x, yIntercept.y];
        },
    });

    const [slope, setSlope] = useState(1);

    useEffect(() => {
        triangleAnchor.setPoint([triangleAnchor.x, yIntercept.y]);
    }, [yIntercept.y]);

    return (
        <Slide>
            <h2>Lineare Funktionen</h2>

            <div className="r-stretch">
                <MathEl tex={String.raw`f(x) = mx + n`} asBlock={true} />

                <div style={{ position: 'relative' }}>
                    <Mafs viewBox={{ x: [-5, 10], y: [-3, 3] }} height={570} zoom={true}>
                        <Coordinates.Cartesian subdivisions={4} />
                        <Line.PointSlope
                            point={yIntercept.point}
                            slope={slope}
                            color={Theme.green}
                        />

                        <g style={{ fontSize: '0.7em' }}>
                            <LaTeX
                                tex={getFunctionEquation(slope, yIntercept.y)}
                                at={[5.5, 2]}
                                color={Theme.green}
                            ></LaTeX>
                        </g>

                        {yIntercept.element}

                        <g className="fragment">
                            <Line.Segment
                                point1={yIntercept.point}
                                point2={triangleAnchor.point}
                                color={Theme.pink}
                            />
                            <Line.Segment
                                point1={triangleAnchor.point}
                                point2={[triangleAnchor.x, slope * triangleAnchor.x + yIntercept.y]}
                                color={Theme.pink}
                            />
                            <Polygon
                                points={[
                                    yIntercept.point,
                                    triangleAnchor.point,
                                    [triangleAnchor.x, slope * triangleAnchor.x + yIntercept.y],
                                ]}
                                color={Theme.pink}
                                weight={0}
                            />
                            {triangleAnchor.element}
                        </g>
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
            </div>
        </Slide>
    );
}

export default LinearFunctionsIntro;
