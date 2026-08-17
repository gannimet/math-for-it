import { Slide } from '@revealjs/react';
import { Circle, Coordinates, LaTeX, Line, Mafs, Plot, Theme, useMovablePoint, vec } from 'mafs';
import { useEffect, useState } from 'react';

const INITIAL_ANGLE = Math.PI / 6;
const ANGLE_ARC_DIST = 0.5;

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

    return (
        <Slide>
            <h2>Trigonometrie</h2>

            <div className="r-stretch">
                <Mafs height={700} viewBox={{ x: [-3.5, 3], y: [-1, 1.2] }} pan={false} zoom={true}>
                    <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />

                    <Circle center={[0, 0]} radius={1} weight={3} />
                    <Line.Segment
                        point1={[0, 0]}
                        point2={trigAnchor.point}
                        color={Theme.pink}
                        weight={3}
                    />

                    <Plot.Parametric
                        domain={[0, angle]}
                        xy={(t) => [Math.cos(t) * ANGLE_ARC_DIST, Math.sin(t) * ANGLE_ARC_DIST]}
                        color={Theme.pink}
                        weight={3}
                    />

                    <LaTeX tex={String.raw`r=1`} at={[0, 1.3]} />
                    <g style={{ fontSize: '0.6em' }}>
                        <LaTeX tex={String.raw`\alpha`} at={[0.35, 0.1]} color={Theme.pink} />
                    </g>

                    <g className="fragment">
                        <Line.Segment
                            point1={[trigAnchor.x, 0]}
                            point2={trigAnchor.point}
                            color={Theme.yellow}
                            weight={4}
                        />
                        <Line.Segment
                            point1={[0, 0]}
                            point2={[trigAnchor.x, 0]}
                            color={Theme.blue}
                            weight={4}
                        />

                        <g style={{ fontSize: '0.7em' }}>
                            <LaTeX
                                tex={String.raw`\alpha = ${((180 * angle) / Math.PI).toFixed(2)}^{\circ}`}
                                at={[-2.5, 1.1]}
                                color={Theme.pink}
                            />
                            <LaTeX
                                tex={String.raw`\sin(\alpha) = \dfrac{\text{GK}}{\textcolor{#ee00ab}{\text{HY}}} = \text{GK} = ${Math.sin(angle).toFixed(2)}`}
                                at={[-2.5, 0.4]}
                                color={Theme.yellow}
                            />
                            <LaTeX
                                tex={String.raw`\cos(\alpha) = \dfrac{\text{AK}}{\textcolor{#ee00ab}{\text{HY}}} = \text{AK} = ${Math.cos(angle).toFixed(2)}`}
                                at={[-2.5, -0.6]}
                                color={Theme.blue}
                            />
                        </g>
                    </g>

                    {trigAnchor.element}
                </Mafs>
            </div>
        </Slide>
    );
}
