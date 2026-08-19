import { Slide } from '@revealjs/react';
import {
    Circle,
    Coordinates,
    LaTeX,
    Line,
    Mafs,
    Plot,
    Text,
    Theme,
    useMovablePoint,
    vec,
} from 'mafs';

const START_ANGLE = Math.PI / 6;
const ANGLE_ARC_DIST = 1.3;

export default function TrigonometryRadians() {
    const angleAnchor = useMovablePoint([Math.cos(START_ANGLE) * 3, Math.sin(START_ANGLE) * 3], {
        constrain: (point) => vec.withMag([point[0] * 3, point[1] * 3], 3),
    });
    const rawAngle = Math.atan2(angleAnchor.y, angleAnchor.x);
    const angleRad = rawAngle < 0 ? 2 * Math.PI + rawAngle : rawAngle;

    return (
        <Slide>
            <h2>(G)rad</h2>

            <div className="r-stretch">
                <Mafs height={700} viewBox={{ x: [-3, 12], y: [-3, 4] }}>
                    <Coordinates.Cartesian xAxis={false} yAxis={false} />

                    <Circle center={[0, 0]} radius={3} />
                    <Line.Segment point1={[0, 0]} point2={[3, 0]} color={Theme.pink} />
                    <Line.Segment point1={[0, 0]} point2={angleAnchor.point} color={Theme.pink} />

                    <Plot.Parametric
                        domain={[0, angleRad]}
                        xy={(t) => [Math.cos(t) * ANGLE_ARC_DIST, Math.sin(t) * ANGLE_ARC_DIST]}
                        color={Theme.pink}
                        weight={3}
                    />
                    <Plot.Parametric
                        domain={[0, angleRad]}
                        xy={(t) => [Math.cos(t) * 3, Math.sin(t) * 3]}
                        color={Theme.green}
                        weight={10}
                    />
                    <g style={{ fontSize: '0.7em' }}>
                        <LaTeX tex={String.raw`\alpha`} at={[1, 0.3]} color={Theme.pink} />
                        <LaTeX tex={String.raw`b`} at={[2.5, 0.6]} color={Theme.green} />
                    </g>

                    <LaTeX
                        tex={String.raw`\alpha = ${((180 * angleRad) / Math.PI).toFixed(1)}^{\circ}`}
                        at={[-2.5, 3.5]}
                        color={Theme.pink}
                    />
                    <g style={{ fontSize: '0.7em' }}>
                        <LaTeX tex={String.raw`r=1`} at={[1.5, -0.5]} color={Theme.foreground} />
                    </g>

                    <g style={{ fontSize: '0.8em' }}>
                        <LaTeX
                            tex={String.raw`U = 2 \pi r = 2 \pi`}
                            at={[0, -1.7]}
                            color={Theme.foreground}
                        />

                        <LaTeX
                            tex={String.raw`\dfrac{\textcolor{#15e272}{b}}{U} = \dfrac{\textcolor{#ee00ab}{\alpha}}{360^{\circ}}`}
                            at={[5.6, 3.2]}
                            color={Theme.foreground}
                        />

                        <LaTeX
                            tex={String.raw`\implies \textcolor{#15e272}{b} = \dfrac{\textcolor{#ee00ab}{\alpha} \cdot U}{360^{\circ}} = \dfrac{\textcolor{#ee00ab}{\alpha} \cdot 2 \pi}{360^{\circ}} = \dfrac{\textcolor{#ee00ab}{\alpha} \pi}{180^{\circ}}`}
                            at={[8.3, 1.4]}
                            color={Theme.foreground}
                        />
                    </g>

                    <LaTeX
                        tex={String.raw`b = ${angleRad.toFixed(2)}\,\text{rad}`}
                        at={[1.6, 3.5]}
                        color={Theme.green}
                    />

                    <g style={{ fontSize: '0.8em' }}>
                        <LaTeX
                            tex={String.raw`\implies \textcolor{#ee00ab}{\alpha} = \dfrac{\textcolor{#15e272}{b} \cdot 180^{\circ}}{\pi}`}
                            at={[6.45, -0.6]}
                            color={Theme.foreground}
                        />

                        <g>
                            <Text x={5.5} y={-2.3} size={50} color={Theme.pink}>
                                Gradmaß
                            </Text>
                            <LaTeX tex={String.raw`\leftrightarrow`} at={[7.3, -2.2]} />
                            <Text x={9.2} y={-2.3} size={50} color={Theme.green}>
                                Bogenmaß
                            </Text>
                        </g>
                    </g>

                    {angleAnchor.element}
                </Mafs>
            </div>
        </Slide>
    );
}
