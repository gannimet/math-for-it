import { Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Line, Mafs, Text, Theme, useMovablePoint } from 'mafs';

function CoordinateSystems() {
    const point2D = useMovablePoint([4, 2], {
        constrain: ([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100],
    });

    return (
        <>
            <Slide>
                <h2>Zahlen und Achsen</h2>

                <Mafs height={700} pan={false} zoom={false}>
                    <Coordinates.Cartesian />

                    <Line.Segment
                        point1={[point2D.x, 0]}
                        point2={point2D.point}
                        style="dashed"
                        color={Theme.pink}
                    />

                    <Line.Segment
                        point1={[0, point2D.y]}
                        point2={point2D.point}
                        style="dashed"
                        color={Theme.pink}
                    />

                    <LaTeX tex="x" at={[7.6, 0.4]} />
                    <LaTeX tex="y" at={[-0.4, 3.1]} />

                    <Text attach="e" x={point2D.x} y={point2D.y} attachDistance={25} size={45}>
                        ({point2D.x}, {point2D.y})
                    </Text>

                    {point2D.element}
                </Mafs>
            </Slide>
        </>
    );
}

export default CoordinateSystems;
