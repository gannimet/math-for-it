import { Fragment, Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Mafs, Polygon, Theme } from 'mafs';

type SquaresConfig = {
    name: string;
    width: number;
    height: number;
    startX: number;
    startY: number;
    color: string;
};

export default function BinomialPerspective() {
    function renderSquares({ name, width, height, startX, startY, color }: SquaresConfig) {
        const widthIndices = Array.from({ length: width }, (_, i) => i);
        const heightIndices = Array.from({ length: height }, (_, i) => i);

        return widthIndices.map((xIndex) => {
            return heightIndices.map((yIndex) => {
                return (
                    <Polygon
                        points={[
                            [startX + xIndex, startY - yIndex],
                            [startX + 1 + xIndex, startY - yIndex],
                            [startX + 1 + xIndex, startY - 1 - yIndex],
                            [startX + xIndex, startY - 1 - yIndex],
                        ]}
                        color={color}
                        weight={4}
                        fillOpacity={0.4}
                        key={`${name}-${xIndex}-${yIndex}`}
                    />
                );
            });
        });
    }

    return (
        <Slide>
            <h2>Perspektivwechsel</h2>

            <Fragment>
                <Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={570}>
                    <Coordinates.Cartesian xAxis={false} yAxis={false} />

                    {renderSquares({
                        name: 's1',
                        width: 4,
                        height: 4,
                        startX: -3,
                        startY: 3,
                        color: Theme.blue,
                    })}
                    {renderSquares({
                        name: 's2',
                        width: 2,
                        height: 4,
                        startX: 1,
                        startY: 3,
                        color: Theme.pink,
                    })}
                    {renderSquares({
                        name: 's3',
                        width: 4,
                        height: 2,
                        startX: -3,
                        startY: -1,
                        color: Theme.pink,
                    })}
                    {renderSquares({
                        name: 's3',
                        width: 2,
                        height: 2,
                        startX: 1,
                        startY: -1,
                        color: Theme.green,
                    })}

                    <g className="fragment">
                        <LaTeX tex={String.raw`a`} at={[-1, 4]} />
                        <LaTeX tex={String.raw`b`} at={[2, 4]} />
                    </g>
                </Mafs>
            </Fragment>
        </Slide>
    );
}
