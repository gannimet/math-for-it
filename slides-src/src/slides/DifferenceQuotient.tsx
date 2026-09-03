import { Slide } from '@revealjs/react';
import {
    Coordinates,
    LaTeX,
    Line,
    Mafs,
    MovablePoint,
    Plot,
    Point,
    Polygon,
    Theme,
    vec,
} from 'mafs';
import { useState } from 'react';
import { useFragmentVisibility } from '../common/use-fragment-visibility';
import { MafsColors } from '../consts';

function f(x: number) {
    return Math.pow(x - 2, 2) / 12 + 1;
}

function f_prime(x: number) {
    return (1 / 6) * x - 1 / 3;
}

const X = 5;
const INITIAL_H = 3;
const H_POINT_LINES_FRAGMENT_ID = 'hPointLinesFragment';

export default function DifferenceQuotient() {
    const [h, setH] = useState(INITIAL_H);
    const isHPointFragmentVisible = useFragmentVisibility(H_POINT_LINES_FRAGMENT_ID);

    const onHPointMoved = ([newX, _]: vec.Vector2) => {
        setH(newX - X);
    };

    return (
        <Slide>
            <h2>Steigungen</h2>

            <div className="r-stretch">
                <Mafs height={700} pan={false} viewBox={{ x: [2, 15], y: [-2, 7] }}>
                    <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
                    <Plot.OfX y={(x) => f(x)} />
                    <Point x={X} y={f(X)} color={Theme.green} />

                    <g className="fragment">
                        <Line.Segment
                            point1={[X, f(X)]}
                            point2={[X, 0]}
                            color={Theme.green}
                            style="dashed"
                        />
                        <Line.Segment
                            point1={[X, f(X)]}
                            point2={[0, f(X)]}
                            color={Theme.green}
                            style="dashed"
                        />
                        <g style={{ fontSize: '0.7em' }}>
                            <LaTeX at={[X, -1]} tex={String.raw`x`} color={Theme.green} />
                            <LaTeX at={[-0.8, f(X)]} tex={String.raw`f(x)`} color={Theme.green} />
                        </g>
                    </g>

                    <g className="fragment">
                        {/* Tangent line */}
                        <Line.PointSlope
                            point={[X, f(X)]}
                            slope={f_prime(X)}
                            color={Theme.green}
                            weight={4}
                        />
                    </g>

                    <g className="fragment" id={H_POINT_LINES_FRAGMENT_ID}>
                        <Line.Segment
                            point1={[X + h, f(X + h)]}
                            point2={[X + h, 0]}
                            color={Theme.pink}
                            style="dashed"
                        />
                        <Line.Segment
                            point1={[X + h, f(X + h)]}
                            point2={[0, f(X + h)]}
                            color={Theme.pink}
                            style="dashed"
                        />
                        <g style={{ fontSize: '0.7em' }}>
                            <LaTeX at={[X + h, -1]} tex={String.raw`x+h`} color={Theme.pink} />
                            <LaTeX
                                at={[-1.4, f(X + h)]}
                                tex={String.raw`f(x+h)`}
                                color={Theme.pink}
                            />
                        </g>
                    </g>

                    <g className="fragment">
                        {/* Approximated tangent line */}
                        <Line.ThroughPoints
                            point1={[X, f(X)]}
                            point2={[X + h, f(X + h)]}
                            color={Theme.blue}
                            weight={4}
                        />
                    </g>

                    <g className="fragment">
                        <Polygon
                            points={[
                                [X, f(X)],
                                [X + h, f(X + h)],
                                [X + h, f(X)],
                            ]}
                            color={Theme.blue}
                            weight={1}
                            fillOpacity={0.3}
                        />
                    </g>

                    <g className="fragment" style={{ fontSize: '0.7em' }}>
                        <LaTeX
                            at={[17.7, 3.5]}
                            tex={String.raw`\textcolor{${MafsColors.green}}{m_{\text{Tan}}} = \textcolor{${MafsColors.green}}{${f_prime(X).toFixed(1)}}`}
                        />
                        <LaTeX
                            at={[14.9, 1.5]}
                            tex={String.raw`\textcolor{${MafsColors.blue}}{m_{\text{Sek}}} = \dfrac{\textcolor{${MafsColors.pink}}{f(x+h)} - \textcolor{${MafsColors.green}}{f(x)}}{\textcolor{${MafsColors.pink}}{x + h} - \textcolor{${MafsColors.green}}{x}} \approx \textcolor{${MafsColors.blue}}{${((f(X + h) - f(X)) / h).toFixed(2)}}`}
                        />
                    </g>

                    {isHPointFragmentVisible && (
                        <MovablePoint
                            point={[X + h, f(X + h)]}
                            onMove={onHPointMoved}
                            constrain={([x, _]) => [x, f(x)]}
                        />
                    )}
                </Mafs>
            </div>
        </Slide>
    );
}
