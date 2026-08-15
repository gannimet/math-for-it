import { Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Line, Mafs, Polygon, Theme, useMovablePoint } from 'mafs';
import { useEffect, useState } from 'react';
import MathEl from '../common/MathEl';

const TEXT_GAP_HORIZONTAL = 1.4;
const TEXT_GAP_VERTICAL = 0.6;

function getFunctionEquation(m: number, n: number) {
    const calcSign = n < 0 ? '' : '+';

    return String.raw`f(x) = ${m.toFixed(1)} x ${calcSign} ${n.toFixed(1)}`;
}

function getDeltaXPosition(
    yInterceptX: number,
    triangleAnchorX: number,
    referenceY: number,
): [number, number] {
    return [(triangleAnchorX + yInterceptX) / 2, referenceY - TEXT_GAP_VERTICAL];
}

function getDeltaYPosition(
    triangleAnchorY: number,
    triangleTop: number,
    referenceX: number,
): [number, number] {
    return [referenceX + TEXT_GAP_HORIZONTAL, (triangleTop + triangleAnchorY) / 2];
}

function LinearFunctionsIntro() {
    const yIntercept = useMovablePoint([0, 1], {
        constrain: ([_, y]) => {
            return [0, Math.round(y * 10) / 10];
        },
    });

    const triangleAnchor = useMovablePoint([1, 1], {
        constrain: ([x, _]) => {
            return [Math.round(x * 10) / 10, yIntercept.y];
        },
    });

    const [slope, setSlope] = useState(1);
    const triangleTop = slope * triangleAnchor.x + yIntercept.y;
    const deltaX = triangleAnchor.x - yIntercept.x;
    const deltaY = triangleTop - triangleAnchor.y;

    const [deltaXPosition, setDeltaXPosition] = useState<[number, number]>(
        getDeltaXPosition(yIntercept.x, triangleAnchor.x, triangleAnchor.y),
    );

    const [deltaYPosition, setDeltaYPosition] = useState<[number, number]>(
        getDeltaYPosition(triangleAnchor.y, triangleTop, triangleAnchor.x),
    );

    useEffect(() => {
        triangleAnchor.setPoint([triangleAnchor.x, yIntercept.y]);
    }, [yIntercept.y]);

    useEffect(() => {
        setDeltaXPosition(getDeltaXPosition(yIntercept.x, triangleAnchor.x, triangleAnchor.y));
        setDeltaYPosition(getDeltaYPosition(triangleAnchor.y, triangleTop, triangleAnchor.x));
    }, [triangleAnchor.x, triangleAnchor.y, triangleTop]);

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
                                at={[9, 2.5]}
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
                                point2={[triangleAnchor.x, triangleTop]}
                                color={Theme.pink}
                            />
                            <Polygon
                                points={[
                                    yIntercept.point,
                                    triangleAnchor.point,
                                    [triangleAnchor.x, triangleTop],
                                ]}
                                color={Theme.pink}
                                weight={0}
                            />
                            {triangleAnchor.element}
                        </g>

                        <g className="fragment" style={{ fontSize: '0.7em' }}>
                            <LaTeX
                                tex={String.raw`\Delta x = ${deltaX.toFixed(1)}`}
                                at={deltaXPosition}
                                color={Theme.pink}
                            />
                            <LaTeX
                                tex={String.raw`\Delta y = ${deltaY.toFixed(1)}`}
                                at={deltaYPosition}
                                color={Theme.pink}
                            />

                            {!Number.isNaN(deltaY / deltaX) && (
                                <LaTeX
                                    tex={String.raw`m = \dfrac{\Delta y}{\Delta x} = \dfrac{${deltaY.toFixed(1)}}{${deltaX.toFixed(1)}} = ${(deltaY / deltaX).toFixed(1)}`}
                                    at={[9, -2.3]}
                                />
                            )}
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
