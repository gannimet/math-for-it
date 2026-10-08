import { Slide } from '@revealjs/react';
import { Circle, Coordinates, Line, Mafs, Theme } from 'mafs';

const NEURON_RADIUS = 1.2;

export default function BackPropagation() {
    return (
        <>
            <Slide data-auto-animate>
                <h2>Backpropagation</h2>

                <div className="r-stretch">
                    <Mafs height={700} pan={false} viewBox={{ x: [-10, 10], y: [-5, 5] }}>
                        <Coordinates.Cartesian xAxis={false} yAxis={false} />

                        {/* W^(1) */}
                        <Line.Segment point1={[-9, 3.5]} point2={[0, 0]} color={Theme.pink} />
                        <Line.Segment point1={[-9, 0]} point2={[0, 0]} />
                        <Line.Segment point1={[-9, -3.5]} point2={[0, 0]} />

                        <Line.Segment point1={[-9, 3.5]} point2={[0, -3.5]} color={Theme.pink} />
                        <Line.Segment point1={[-9, 0]} point2={[0, -3.5]} />
                        <Line.Segment point1={[-9, -3.5]} point2={[0, -3.5]} />

                        {/* W^(2) */}
                        <Line.Segment point1={[0, 3.5]} point2={[9, 0]} color={Theme.pink} />
                        <Line.Segment point1={[0, 0]} point2={[9, 0]} />
                        <Line.Segment point1={[0, -3.5]} point2={[9, 0]} />

                        <Line.Segment point1={[0, 3.5]} point2={[9, -3.5]} color={Theme.pink} />
                        <Line.Segment point1={[0, 0]} point2={[9, -3.5]} />
                        <Line.Segment point1={[0, -3.5]} point2={[9, -3.5]} />

                        {/* Layer (0) */}
                        <Circle
                            center={[-9, 3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[-9, 3.5]} radius={NEURON_RADIUS} color={Theme.pink} />

                        <Circle
                            center={[-9, 0]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[-9, 0]} radius={NEURON_RADIUS} />

                        <Circle
                            center={[-9, -3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[-9, -3.5]} radius={NEURON_RADIUS} />

                        {/* Layer (1) */}
                        <Circle
                            center={[0, 3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[0, 3.5]} radius={NEURON_RADIUS} color={Theme.pink} />

                        <Circle
                            center={[0, 0]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[0, 0]} radius={NEURON_RADIUS} />

                        <Circle
                            center={[0, -3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[0, -3.5]} radius={NEURON_RADIUS} />

                        {/* Layer (2) */}
                        <Circle
                            center={[9, 0]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[9, 0]} radius={NEURON_RADIUS} />

                        <Circle
                            center={[9, -3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle center={[9, -3.5]} radius={NEURON_RADIUS} />
                    </Mafs>
                </div>
            </Slide>
        </>
    );
}
