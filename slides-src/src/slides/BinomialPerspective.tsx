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

const figureStartX = -10;

export default function BinomialPerspective() {
    function renderSquare({ name, width, height, startX, startY, color }: SquaresConfig) {
        return (
            <Polygon
                points={[
                    [startX, startY],
                    [startX + width, startY],
                    [startX + width, startY - height],
                    [startX, startY - height],
                ]}
                color={color}
                weight={3}
                fillOpacity={0.4}
                key={name}
            />
        );
    }

    return (
        <Slide>
            <h2>Perspektivwechsel</h2>

            <div className="r-stretch">
                <Fragment>
                    <Mafs viewBox={{ x: [-12, 12], y: [-5, 5] }} height={700} pan={false}>
                        <Coordinates.Cartesian xAxis={false} yAxis={false} />

                        {renderSquare({
                            name: 's1',
                            width: 4,
                            height: 4,
                            startX: figureStartX,
                            startY: 3,
                            color: Theme.blue,
                        })}
                        {renderSquare({
                            name: 's2',
                            width: 2,
                            height: 4,
                            startX: figureStartX + 4.05,
                            startY: 3,
                            color: Theme.pink,
                        })}
                        {renderSquare({
                            name: 's3',
                            width: 4,
                            height: 2,
                            startX: figureStartX,
                            startY: -1.05,
                            color: Theme.pink,
                        })}
                        {renderSquare({
                            name: 's4',
                            width: 2,
                            height: 2,
                            startX: figureStartX + 4.05,
                            startY: -1.05,
                            color: Theme.green,
                        })}

                        <g className="fragment">
                            <LaTeX tex={String.raw`a`} at={[figureStartX + 2, 3.7]} />
                            <LaTeX tex={String.raw`b`} at={[figureStartX + 5, 3.7]} />

                            <LaTeX tex={String.raw`a`} at={[figureStartX - 0.7, 1]} />
                            <LaTeX tex={String.raw`b`} at={[figureStartX - 0.7, -2.2]} />
                        </g>

                        <g className="fragment" style={{ fontSize: '0.8em' }}>
                            <LaTeX tex={String.raw`a^2`} at={[figureStartX + 2.2, 1.1]} />
                            <LaTeX tex={String.raw`ab`} at={[figureStartX + 5.1, 1.1]} />
                            <LaTeX tex={String.raw`ab`} at={[figureStartX + 2.1, -2.1]} />
                            <LaTeX tex={String.raw`b^2`} at={[figureStartX + 5.1, -2.1]} />
                        </g>

                        <g className="fragment">
                            <LaTeX tex={String.raw`\iff (a+b)^2 = a^2 + 2ab + b^2`} at={[4, 0]} />
                        </g>

                        <g className="fragment" style={{ fontSize: '0.7em' }}>
                            <LaTeX
                                at={[5, -2]}
                                tex={String.raw`\text{(Erste binomische Formel)}`}
                            />
                        </g>
                    </Mafs>
                </Fragment>
            </div>
        </Slide>
    );
}
