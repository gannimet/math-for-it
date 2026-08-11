import { Slide } from '@revealjs/react';
import { Coordinates, Mafs, Text, useMovablePoint } from 'mafs';

function NumberLine() {
    const point1D = useMovablePoint([2, 0], {
        constrain: 'horizontal',
    });

    return (
        <>
            <Slide>
                <h2>Zahlen und Achsen</h2>

                <Mafs height={700}>
                    <Coordinates.Cartesian yAxis={false} />
                    <Text x={0} y={0} attach="n" attachDistance={36} size={40}>
                        0
                    </Text>

                    <Text x={point1D.x} y={0} attach="n" attachDistance={-50} size={45}>
                        {point1D.x.toFixed(2)}
                    </Text>

                    {point1D.element}
                </Mafs>
            </Slide>
        </>
    );
}

export default NumberLine;
