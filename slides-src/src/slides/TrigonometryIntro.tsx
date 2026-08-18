import { Slide } from '@revealjs/react';
import {
    Circle,
    Coordinates,
    LaTeX,
    Line,
    Mafs,
    Plot,
    Point,
    Theme,
    useMovablePoint,
    useStopwatch,
    vec,
} from 'mafs';
import { useEffect, useState } from 'react';

const INITIAL_ANGLE = Math.PI / 6;
const ANGLE_ARC_DIST = 0.5;
const BBOX_EPSILON = 0.001;

export default function TrigonometryIntro() {
    const trigAnchor = useMovablePoint([Math.cos(INITIAL_ANGLE), Math.sin(INITIAL_ANGLE)], {
        constrain: (point) => vec.withMag(point, 1),
    });

    const [angle, setAngle] = useState(INITIAL_ANGLE);

    useEffect(() => {
        let newAngle = Math.atan2(trigAnchor.y, trigAnchor.x);

        if (newAngle < 0) {
            newAngle = 2 * Math.PI + newAngle;
        }

        setAngle(newAngle);
    }, [trigAnchor.x, trigAnchor.y]);

    const { time, start, stop } = useStopwatch();
    const [isSineAnimationRunning, setIsSineAnimationRunning] = useState(false);

    const toggleSineAnimation = () => {
        if (isSineAnimationRunning) {
            stop();
            setIsSineAnimationRunning(false);
        } else {
            start();
            setIsSineAnimationRunning(true);
        }
    };

    useEffect(() => {
        const newAngle = time % (2 * Math.PI);

        setAngle(newAngle);
        trigAnchor.setPoint([Math.cos(newAngle), Math.sin(newAngle)]);
    }, [time]);

    return (
        <>
            <Slide data-auto-animate>
                <h2>Trigonometrie</h2>

                <div className="r-stretch" style={{ position: 'relative' }}>
                    <Mafs
                        height={700}
                        viewBox={{ x: [-2.5, 2.5], y: [-1.5, 1.5] }}
                        pan={false}
                        zoom={false}
                    >
                        <g data-id="trig-coords">
                            <Coordinates.Cartesian
                                xAxis={{ labels: (l) => (Math.abs(l) === 1 ? l : '') }}
                                yAxis={{ labels: (l) => (Math.abs(l) === 1 ? l : '') }}
                            />
                        </g>

                        <g data-id="trig-circle">
                            <Circle center={[0, 0]} radius={1} weight={3} />
                        </g>
                        <g data-id="trig-anchor-radius">
                            <Line.Segment
                                point1={[0, 0]}
                                point2={trigAnchor.point}
                                color={Theme.pink}
                                weight={3}
                            />
                        </g>

                        <g data-id="trig-angle-arc">
                            <Plot.Parametric
                                domain={[0, angle]}
                                xy={(t) => [
                                    Math.cos(t) * ANGLE_ARC_DIST,
                                    Math.sin(t) * ANGLE_ARC_DIST,
                                ]}
                                color={Theme.pink}
                                weight={3}
                            />
                        </g>

                        <g data-id="trig-angle-value">
                            <LaTeX
                                tex={String.raw`\alpha = ${((180 * angle) / Math.PI).toFixed(1)}^{\circ}`}
                                at={[-2.5, 1.3]}
                                color={Theme.pink}
                            />
                        </g>

                        <g style={{ fontSize: '0.6em' }} data-id="trig-alpha">
                            <LaTeX tex={String.raw`\alpha`} at={[0.35, 0.1]} color={Theme.pink} />
                        </g>

                        <g className="fragment">
                            <g data-id="trig-sin-line">
                                <Line.Segment
                                    point1={[trigAnchor.x + BBOX_EPSILON, 0]}
                                    point2={trigAnchor.point}
                                    color={Theme.green}
                                    weight={4}
                                />
                            </g>
                            <g data-id="trig-cos-line">
                                <Line.Segment
                                    point1={[0, 0]}
                                    point2={[trigAnchor.x, BBOX_EPSILON]}
                                    color={Theme.blue}
                                    weight={4}
                                />
                            </g>

                            <g style={{ fontSize: '0.7em' }} data-id="trig-sin-formula">
                                <LaTeX
                                    tex={String.raw`\sin(\alpha) = \dfrac{\text{GK}}{\textcolor{#ee00ab}{\text{HY}}} = \text{GK} \approx ${Math.sin(angle).toFixed(2)}`}
                                    at={[-2.7, 0.4]}
                                    color={Theme.green}
                                />
                            </g>
                            <g style={{ fontSize: '0.7em' }} data-id="trig-cos-formula">
                                <LaTeX
                                    tex={String.raw`\cos(\alpha) = \dfrac{\text{AK}}{\textcolor{#ee00ab}{\text{HY}}} = \text{AK} \approx ${Math.cos(angle).toFixed(2)}`}
                                    at={[-2.7, -0.6]}
                                    color={Theme.blue}
                                />
                            </g>
                        </g>

                        <g className="fragment">
                            <g data-id="trig-tan-geometry">
                                <Line.ThroughPoints point1={[1, -1]} point2={[1, 1]} />
                                <Line.Segment
                                    point1={[0, 0]}
                                    point2={[1, Math.tan(angle)]}
                                    color={Theme.pink}
                                />
                                <Line.Segment
                                    point1={[1, 0]}
                                    point2={[1, Math.tan(angle)]}
                                    color={Theme.yellow}
                                    weight={4}
                                />
                                <Point x={1} y={Math.tan(angle)} color={Theme.yellow} />
                            </g>

                            <g style={{ fontSize: '0.7em' }} data-id="trig-tan-formula">
                                <LaTeX
                                    tex={String.raw`\tan(\alpha) = \dfrac{\textcolor{#15e272}{\text{GK}}}{\textcolor{#58a6ff}{\text{AK}}} =`}
                                    at={[2.3, 0.5]}
                                    color={Theme.yellow}
                                />
                                <LaTeX
                                    tex={String.raw`= \dfrac{\textcolor{#15e272}{\sin(\alpha)}}{\textcolor{#58a6ff}{\cos(\alpha)}} \approx ${Math.tan(angle).toFixed(2)}`}
                                    at={[2.3, -0.5]}
                                    color={Theme.yellow}
                                />
                            </g>
                        </g>

                        <g data-id="trig-anchor-point">{trigAnchor.element}</g>
                    </Mafs>
                </div>
            </Slide>

            <Slide data-auto-animate>
                <h2>Trigonometrie</h2>

                <div className="r-stretch">
                    <div style={{ position: 'relative' }}>
                        <Mafs
                            height={700}
                            viewBox={{ x: [-3.5, 6.5], y: [-1, 1.2] }}
                            pan={false}
                            zoom={false}
                        >
                            <g data-id="trig-coords">
                                <Coordinates.Cartesian
                                    xAxis={{ labels: (l) => (l > 0 ? l : '') }}
                                    yAxis={{ labels: (l) => (Math.abs(l) === 1 ? l : '') }}
                                />
                            </g>

                            <g data-id="trig-circle">
                                <Circle center={[-2, 0]} radius={1} weight={3} />
                            </g>
                            <g data-id="trig-anchor-radius">
                                <Line.Segment
                                    point1={[-2, 0]}
                                    point2={[trigAnchor.x - 2, trigAnchor.y]}
                                    color={Theme.pink}
                                    weight={3}
                                />
                            </g>

                            <g data-id="trig-angle-arc">
                                <Plot.Parametric
                                    domain={[0, angle]}
                                    xy={(t) => [
                                        Math.cos(t) * ANGLE_ARC_DIST - 2,
                                        Math.sin(t) * ANGLE_ARC_DIST,
                                    ]}
                                    color={Theme.pink}
                                    weight={3}
                                />
                            </g>

                            <g data-id="trig-angle-value">
                                <LaTeX
                                    tex={String.raw`\alpha = ${((180 * angle) / Math.PI).toFixed(1)}^{\circ}`}
                                    at={[-2, 1.7]}
                                    color={Theme.pink}
                                />
                            </g>

                            <g style={{ fontSize: '0.5em' }} data-id="trig-alpha">
                                <LaTeX
                                    tex={String.raw`\alpha`}
                                    at={[-1.65, 0.1]}
                                    color={Theme.pink}
                                />
                            </g>

                            <g data-id="trig-sin-line">
                                <Line.Segment
                                    point1={[trigAnchor.x - 2 + BBOX_EPSILON, 0]}
                                    point2={[trigAnchor.x - 2, trigAnchor.y]}
                                    color={Theme.green}
                                    weight={4}
                                />
                            </g>
                            <g data-id="trig-cos-line">
                                <Line.Segment
                                    point1={[-2, 0]}
                                    point2={[trigAnchor.x - 2, BBOX_EPSILON]}
                                    color={Theme.blue}
                                    weight={4}
                                />
                            </g>

                            <g style={{ fontSize: '0.7em' }} data-id="trig-sin-formula">
                                <LaTeX
                                    tex={String.raw`\sin(\alpha) = \dfrac{\text{GK}}{\textcolor{#ee00ab}{\text{HY}}} = \text{GK} \approx ${Math.sin(angle).toFixed(2)}`}
                                    at={[3, 1.7]}
                                    color={Theme.green}
                                />
                            </g>

                            <g data-id="trig-sin-graph">
                                <Plot.OfX
                                    y={(x) => Math.sin(x)}
                                    color={Theme.green}
                                    domain={[0, 10]}
                                    weight={4}
                                />
                                <Plot.OfX
                                    y={(x) => Math.sin(x)}
                                    color={Theme.green}
                                    domain={[-5, 0]}
                                    weight={0.8}
                                />
                            </g>

                            <g className="fragment" data-id="trig-cos-graph">
                                <Plot.OfX
                                    y={(x) => Math.cos(x)}
                                    color={Theme.blue}
                                    domain={[0, 10]}
                                    weight={4}
                                />

                                <Plot.OfX
                                    y={(x) => Math.cos(x)}
                                    color={Theme.blue}
                                    domain={[-5, 0]}
                                    weight={0.8}
                                />
                            </g>

                            <g data-id="trig-anchor-non-movable">
                                <Point x={trigAnchor.x - 2} y={trigAnchor.y} color={Theme.pink} />
                            </g>

                            {isSineAnimationRunning && (
                                <>
                                    <Point
                                        x={time % (2 * Math.PI)}
                                        y={Math.sin(time)}
                                        color={Theme.green}
                                    />
                                    <Line.Segment
                                        point1={[trigAnchor.x - 2, trigAnchor.y]}
                                        point2={[time % (2 * Math.PI), Math.sin(time)]}
                                        style="dashed"
                                        color={Theme.green}
                                    />
                                </>
                            )}
                        </Mafs>

                        <button
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                fontSize: '30px',
                            }}
                            onClick={() => toggleSineAnimation()}
                        >
                            {isSineAnimationRunning ? 'Stop' : 'Start'}
                        </button>
                    </div>
                </div>
            </Slide>
        </>
    );
}
