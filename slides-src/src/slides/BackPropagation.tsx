import { Slide } from '@revealjs/react';
import { Circle, Coordinates, LaTeX, Line, Mafs, Theme } from 'mafs';
import { useFragmentVisibility } from '../common/use-fragment-visibility';
import { MafsColors } from '../consts';

const NEURON_RADIUS = 1.4;
const FADE_OPACITY = 0.3;
const FADE_FILL_OPACITY = 0.1;

export default function BackPropagation() {
    const isHighlight1Visible = useFragmentVisibility('highlight-1');
    const isHighlight2Visible = useFragmentVisibility('highlight-2');

    return (
        <>
            <Slide data-auto-animate>
                <div className="r-stretch">
                    <Mafs height={800} pan={false} viewBox={{ x: [-10, 10], y: [-5, 7] }}>
                        <Coordinates.Cartesian xAxis={false} yAxis={false} />

                        {/* W^(1) */}
                        <Line.Segment
                            point1={[-9, 3.5]}
                            point2={[0, 0]}
                            color={Theme.pink}
                            opacity={FADE_OPACITY}
                        />
                        <Line.Segment point1={[-9, 0]} point2={[0, 0]} opacity={FADE_OPACITY} />
                        <Line.Segment point1={[-9, -3.5]} point2={[0, 0]} opacity={FADE_OPACITY} />

                        <Line.Segment
                            point1={[-9, 3.5]}
                            point2={[0, -3.5]}
                            color={Theme.pink}
                            opacity={FADE_OPACITY}
                        />
                        <Line.Segment point1={[-9, 0]} point2={[0, -3.5]} opacity={FADE_OPACITY} />
                        <Line.Segment
                            point1={[-9, -3.5]}
                            point2={[0, -3.5]}
                            opacity={FADE_OPACITY}
                        />

                        {/* W^(2) */}
                        <Line.Segment
                            point1={[0, 3.5]}
                            point2={[9, 0]}
                            color={Theme.pink}
                            opacity={FADE_OPACITY}
                        />
                        <Line.Segment point1={[0, 0]} point2={[9, 0]} />
                        <Line.Segment point1={[0, -3.5]} point2={[9, 0]} opacity={FADE_OPACITY} />

                        <Line.Segment
                            point1={[0, 3.5]}
                            point2={[9, -3.5]}
                            color={Theme.pink}
                            opacity={FADE_OPACITY}
                        />
                        <Line.Segment point1={[0, 0]} point2={[9, -3.5]} opacity={FADE_OPACITY} />
                        <Line.Segment
                            point1={[0, -3.5]}
                            point2={[9, -3.5]}
                            opacity={FADE_OPACITY}
                        />

                        {/* Layer (0) */}
                        <Circle
                            center={[-9, 3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[-9, 3.5]}
                            radius={NEURON_RADIUS}
                            color={Theme.pink}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        <Circle
                            center={[-9, 0]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[-9, 0]}
                            radius={NEURON_RADIUS}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        <Circle
                            center={[-9, -3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[-9, -3.5]}
                            radius={NEURON_RADIUS}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        {/* Layer (1) */}
                        <Circle
                            center={[0, 3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[0, 3.5]}
                            radius={NEURON_RADIUS}
                            color={Theme.pink}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        <Circle
                            center={[0, 0]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[0, 0]}
                            radius={NEURON_RADIUS}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        <Circle
                            center={[0, -3.5]}
                            radius={NEURON_RADIUS}
                            fillOpacity={1}
                            color={Theme.background}
                        />
                        <Circle
                            center={[0, -3.5]}
                            radius={NEURON_RADIUS}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

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
                        <Circle
                            center={[9, -3.5]}
                            radius={NEURON_RADIUS}
                            strokeOpacity={FADE_OPACITY}
                            fillOpacity={FADE_FILL_OPACITY}
                        />

                        <g fontSize="0.7em">
                            <g style={{ opacity: FADE_OPACITY }}>
                                <LaTeX
                                    at={[0, 3.5]}
                                    tex={String.raw`a_0^{(1)} = 1`}
                                    color={Theme.pink}
                                />

                                <Line.Segment
                                    point1={[0, 0 + NEURON_RADIUS * 0.5]}
                                    point2={[0, 0 - NEURON_RADIUS * 0.5]}
                                />
                                <LaTeX at={[-0.7, 0]} tex={String.raw`z_1^{(1)}`} />
                                <LaTeX at={[0.7, 0]} tex={String.raw`a_1^{(1)}`} />

                                <Line.Segment
                                    point1={[0, -3.5 + NEURON_RADIUS * 0.5]}
                                    point2={[0, -3.5 - NEURON_RADIUS * 0.5]}
                                />
                                <LaTeX at={[-0.7, -3.5]} tex={String.raw`z_2^{(1)}`} />
                                <LaTeX at={[0.7, -3.5]} tex={String.raw`a_2^{(1)}`} />
                            </g>

                            <Line.Segment
                                point1={[9, 0 + NEURON_RADIUS * 0.5]}
                                point2={[9, 0 - NEURON_RADIUS * 0.5]}
                            />
                            <LaTeX at={[8.3, 0]} tex={String.raw`z_0^{(2)}`} />
                            <LaTeX at={[9.7, 0]} tex={String.raw`a_0^{(2)}`} />

                            <g style={{ opacity: FADE_OPACITY }}>
                                <Line.Segment
                                    point1={[9, -3.5 + NEURON_RADIUS * 0.5]}
                                    point2={[9, -3.5 - NEURON_RADIUS * 0.5]}
                                />
                                <LaTeX at={[8.3, -3.5]} tex={String.raw`z_1^{(2)}`} />
                                <LaTeX at={[9.7, -3.5]} tex={String.raw`a_1^{(2)}`} />
                            </g>

                            <LaTeX
                                at={[7.7, 1.4]}
                                tex={String.raw`\delta_0^{(2)}`}
                                color={Theme.blue}
                            />

                            <LaTeX at={[4.5, 0.5]} tex={String.raw`w_{0,1}^{(2)}`} />

                            <LaTeX
                                at={[-4, 6]}
                                tex={String.raw`\dfrac{\partial C}{\partial z_{0}^{(2)}} = \dfrac{\partial C}{\partial a_0^{(2)}} \dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}} = 2 \left( a_0^{(2)} - y_0 \right) \cdot \sigma^{\prime} \left( z_0^{(2)} \right) = \textcolor{${MafsColors.blue}}{\delta_0^{(2)}}`}
                            />

                            <LaTeX
                                at={[-6.7, 3]}
                                tex={String.raw`\dfrac{\partial C}{\partial w_{0,1}^{(2)}} = \dfrac{\partial C}{\partial z_0^{(2)}} \dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}} = \textcolor{${MafsColors.blue}}{\delta_0^{(2)}} \cdot \dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}}`}
                            />
                        </g>
                    </Mafs>

                    <div className="fragment" id="highlight-1"></div>
                    <div className="fragment" id="highlight-2"></div>
                </div>
            </Slide>
        </>
    );
}
