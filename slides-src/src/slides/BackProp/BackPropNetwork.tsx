import { Circle, LaTeX, Line, Theme } from 'mafs';
import NetworkPart from './NetworkPart';

const NEURON_RADIUS = 1.4;

export default function BackPropNetwork() {
    return (
        <>
            {/* W^(1) */}
            <NetworkPart id="w_0,0^(1)">
                <Line.Segment point1={[-9, 3.5]} point2={[0, 0]} color={Theme.pink} />
            </NetworkPart>
            <NetworkPart id="w_1,0^(1)">
                <Line.Segment point1={[-9, 0]} point2={[0, 0]} />
            </NetworkPart>
            <NetworkPart id="w_2,0^(1)">
                <Line.Segment point1={[-9, -3.5]} point2={[0, 0]} />
            </NetworkPart>

            <NetworkPart id="w_0,1^(1)">
                <Line.Segment point1={[-9, 3.5]} point2={[0, -3.5]} color={Theme.pink} />
            </NetworkPart>
            <NetworkPart id="w_1,1^(1)">
                <Line.Segment point1={[-9, 0]} point2={[0, -3.5]} />
            </NetworkPart>
            <NetworkPart id="w_2,1^(1)">
                <Line.Segment point1={[-9, -3.5]} point2={[0, -3.5]} />
            </NetworkPart>

            {/* W^(2) */}
            <NetworkPart id="w_0,0^(2)">
                <Line.Segment point1={[0, 3.5]} point2={[9, 0]} color={Theme.pink} />
            </NetworkPart>
            <NetworkPart id="w_0,1^(2)">
                <Line.Segment point1={[0, 0]} point2={[9, 0]} />
            </NetworkPart>
            <NetworkPart id="w_0,2^(2)">
                <Line.Segment point1={[0, -3.5]} point2={[9, 0]} />
            </NetworkPart>

            <NetworkPart id="w_1,0^(2)">
                <Line.Segment point1={[0, 3.5]} point2={[9, -3.5]} color={Theme.pink} />
            </NetworkPart>
            <NetworkPart id="w_1,0^(2)">
                <Line.Segment point1={[0, 0]} point2={[9, -3.5]} />
            </NetworkPart>
            <NetworkPart id="w_1,0^(2)">
                <Line.Segment point1={[0, -3.5]} point2={[9, -3.5]} />
            </NetworkPart>

            {/* Layer (0) */}
            <Circle
                center={[-9, 3.5]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_0^(0)">
                <Circle center={[-9, 3.5]} radius={NEURON_RADIUS} color={Theme.pink} />
            </NetworkPart>

            <Circle
                center={[-9, 0]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_1^(0)">
                <Circle center={[-9, 0]} radius={NEURON_RADIUS} />
            </NetworkPart>

            <Circle
                center={[-9, -3.5]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_2^(0)">
                <Circle center={[-9, -3.5]} radius={NEURON_RADIUS} />
            </NetworkPart>

            {/* Layer (1) */}
            <Circle
                center={[0, 3.5]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_0^(1)">
                <Circle center={[0, 3.5]} radius={NEURON_RADIUS} color={Theme.pink} />
            </NetworkPart>

            <Circle
                center={[0, 0]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_1^(1)">
                <Circle center={[0, 0]} radius={NEURON_RADIUS} />
            </NetworkPart>

            <Circle
                center={[0, -3.5]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_2^(1)">
                <Circle center={[0, -3.5]} radius={NEURON_RADIUS} />
            </NetworkPart>

            {/* Layer (2) */}
            <Circle
                center={[9, 0]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_0^(2)">
                <Circle center={[9, 0]} radius={NEURON_RADIUS} />
            </NetworkPart>

            <Circle
                center={[9, -3.5]}
                radius={NEURON_RADIUS}
                fillOpacity={1}
                color={Theme.background}
            />
            <NetworkPart id="n_1^(2)">
                <Circle center={[9, -3.5]} radius={NEURON_RADIUS} />
            </NetworkPart>

            <g fontSize="0.7em">
                {/* Contents of layer (0) */}
                <NetworkPart id="a_0^(0)">
                    <LaTeX at={[-9, 3.5]} tex={String.raw`a_0^{(0)} = 1`} color={Theme.pink} />
                </NetworkPart>

                <NetworkPart id="a_1^(0)">
                    <LaTeX at={[-9, 0]} tex={String.raw`a_1^{(0)}`} />
                </NetworkPart>

                <NetworkPart id="a_2^(0)">
                    <LaTeX at={[-9, -3.5]} tex={String.raw`a_2^{(0)}`} />
                </NetworkPart>

                {/* Contents of layer (1) */}
                <NetworkPart id="a_0^(1)">
                    <LaTeX at={[0, 3.5]} tex={String.raw`a_0^{(1)} = 1`} color={Theme.pink} />
                </NetworkPart>

                <NetworkPart id="z_1^(1)">
                    <LaTeX at={[-0.7, 0]} tex={String.raw`z_1^{(1)}`} />
                </NetworkPart>
                <NetworkPart id="s_1^(1)">
                    <Line.Segment
                        point1={[0, 0 + NEURON_RADIUS * 0.5]}
                        point2={[0, 0 - NEURON_RADIUS * 0.5]}
                    />
                </NetworkPart>
                <NetworkPart id="a_1^(1)">
                    <LaTeX at={[0.7, 0]} tex={String.raw`a_1^{(1)}`} />
                </NetworkPart>

                <NetworkPart id="z_2^(1)">
                    <LaTeX at={[-0.7, -3.5]} tex={String.raw`z_2^{(1)}`} />
                </NetworkPart>
                <NetworkPart id="s_2^(1)">
                    <Line.Segment
                        point1={[0, -3.5 + NEURON_RADIUS * 0.5]}
                        point2={[0, -3.5 - NEURON_RADIUS * 0.5]}
                    />
                </NetworkPart>
                <NetworkPart id="a_2^(1)">
                    <LaTeX at={[0.7, -3.5]} tex={String.raw`a_2^{(1)}`} />
                </NetworkPart>

                {/* Contents of layer (2) */}
                <NetworkPart id="z_0^(2)">
                    <LaTeX at={[8.3, 0]} tex={String.raw`z_0^{(2)}`} />
                </NetworkPart>
                <NetworkPart id="s_0^(2)">
                    <Line.Segment
                        point1={[9, 0 + NEURON_RADIUS * 0.5]}
                        point2={[9, 0 - NEURON_RADIUS * 0.5]}
                    />
                </NetworkPart>
                <NetworkPart id="a_0^(2)">
                    <LaTeX at={[9.7, 0]} tex={String.raw`a_0^{(2)}`} />
                </NetworkPart>

                <NetworkPart id="z_1^(2)">
                    <LaTeX at={[8.3, -3.5]} tex={String.raw`z_1^{(2)}`} />
                </NetworkPart>
                <NetworkPart id="s_1^(2)">
                    <Line.Segment
                        point1={[9, -3.5 + NEURON_RADIUS * 0.5]}
                        point2={[9, -3.5 - NEURON_RADIUS * 0.5]}
                    />
                </NetworkPart>
                <NetworkPart id="a_1^(2)">
                    <LaTeX at={[9.7, -3.5]} tex={String.raw`a_1^{(2)}`} />
                </NetworkPart>
            </g>
        </>
    );
}
