import { Circle, LaTeX, Line, Theme } from 'mafs';

const NEURON_RADIUS = 1.4;
const FADE_OPACITY = 0.3;
const FADE_FILL_OPACITY = 0.1;

export default function BackPropNetwork() {
    return (
        <>
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
            <Line.Segment point1={[-9, -3.5]} point2={[0, -3.5]} opacity={FADE_OPACITY} />

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
            <Line.Segment point1={[0, -3.5]} point2={[9, -3.5]} opacity={FADE_OPACITY} />

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
                    <LaTeX at={[0, 3.5]} tex={String.raw`a_0^{(1)} = 1`} color={Theme.pink} />

                    <Line.Segment
                        point1={[0, 0 + NEURON_RADIUS * 0.5]}
                        point2={[0, 0 - NEURON_RADIUS * 0.5]}
                    />
                    <LaTeX at={[-0.7, 0]} tex={String.raw`z_1^{(1)}`} />

                    <Line.Segment
                        point1={[0, -3.5 + NEURON_RADIUS * 0.5]}
                        point2={[0, -3.5 - NEURON_RADIUS * 0.5]}
                    />
                    <LaTeX at={[-0.7, -3.5]} tex={String.raw`z_2^{(1)}`} />
                    <LaTeX at={[0.7, -3.5]} tex={String.raw`a_2^{(1)}`} />
                </g>

                <g
                    style={{
                        opacity: FADE_OPACITY,
                    }}
                >
                    <LaTeX at={[0.7, 0]} tex={String.raw`a_1^{(1)}`} />
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

                <LaTeX at={[7.7, 1.4]} tex={String.raw`\delta_0^{(2)}`} color={Theme.blue} />

                <LaTeX at={[4.5, 0.5]} tex={String.raw`w_{0,1}^{(2)}`} />
            </g>
        </>
    );
}
