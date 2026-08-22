import { Slide } from '@revealjs/react';
import { Coordinates, LaTeX, Line, Mafs, Point, Text, Theme } from 'mafs';
import dayLengthData from '../data/day_lengths_2024_2026.json';
import moonPhasesData from '../data/moon_phases_2026.json';

const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez',
];

export default function TrigAstronomy() {
    return (
        <>
            <Slide data-auto-animate>
                <div className="r-stretch">
                    <h2 data-id="sinus-nature-heading">Sinus in der Natur</h2>
                    <Mafs
                        height={700}
                        viewBox={{ x: [-30, 1125], y: [-3, 29] }}
                        preserveAspectRatio={false}
                        pan={false}
                    >
                        <Coordinates.Cartesian
                            xAxis={{
                                lines: 365,
                                subdivisions: 12,
                                labels: false,
                            }}
                            yAxis={{
                                lines: 6,
                                subdivisions: 6,
                                labels: (l) => (l <= 24 ? l : ''),
                            }}
                        />

                        <Text x={183} y={0} size={38} attach="n" attachDistance={48}>
                            2024
                        </Text>
                        <Text x={548} y={0} size={38} attach="n" attachDistance={48}>
                            2025
                        </Text>
                        <Text x={913} y={0} size={38} attach="n" attachDistance={48}>
                            2026
                        </Text>

                        <Text x={0} y={27} size={38} attach="e" attachDistance={24}>
                            Stunden
                        </Text>

                        {dayLengthData.map(({ dayIndex, sunriseHours, sunsetHours }, index) => {
                            if (index === 0) {
                                return <g key={dayIndex}></g>;
                            }

                            const {
                                dayIndex: prevDayIndex,
                                sunriseHours: prevSunriseHours,
                                sunsetHours: prevSunsetHours,
                            } = dayLengthData[index - 1];

                            if (Math.abs(sunriseHours - prevSunriseHours) > 0.5) {
                                return <g key={dayIndex}></g>;
                            }

                            return (
                                <g key={dayIndex}>
                                    <Line.Segment
                                        point1={[prevDayIndex, prevSunriseHours]}
                                        point2={[dayIndex, sunriseHours]}
                                        color={Theme.green}
                                        weight={4}
                                    />

                                    <Line.Segment
                                        point1={[prevDayIndex, prevSunsetHours]}
                                        point2={[dayIndex, sunsetHours]}
                                        color={Theme.violet}
                                        weight={4}
                                    />
                                </g>
                            );
                        })}

                        <g className="fragment">
                            {dayLengthData.map(({ dayIndex, dayLengthHours }, index) => {
                                if (index === 0) {
                                    return <g key={dayIndex}></g>;
                                }

                                const {
                                    dayIndex: prevDayIndex,
                                    dayLengthHours: prevDayLengthHours,
                                } = dayLengthData[index - 1];

                                return (
                                    <g key={dayIndex}>
                                        <Line.Segment
                                            point1={[prevDayIndex, prevDayLengthHours]}
                                            point2={[dayIndex, dayLengthHours]}
                                            color={Theme.yellow}
                                            weight={4}
                                        />
                                    </g>
                                );
                            })}

                            <g style={{ fontSize: '0.6em' }}>
                                <LaTeX
                                    tex={String.raw`\textcolor{#ffe44a}{\text{Tageslänge}} \;|\; \textcolor{#15e272}{\text{Sonnenaufgang}} \;|\; \textcolor{#ae58ff}{\text{Sonnenuntergang}}`}
                                    at={[800, 27]}
                                />
                            </g>
                        </g>
                    </Mafs>
                </div>
            </Slide>

            <Slide data-auto-animate>
                <h2 data-id="sinus-nature-heading">Sinus in der Natur</h2>
                <div className="r-stretch">
                    <Mafs
                        height={700}
                        viewBox={{ x: [-20, 374], y: [-20, 130] }}
                        preserveAspectRatio={false}
                        pan={false}
                    >
                        <Coordinates.Cartesian
                            xAxis={{ lines: 30.35, labels: false }}
                            yAxis={{
                                lines: 10,
                                labels: false,
                            }}
                        />

                        {moonPhasesData.map(({ dayIndex, phasePercentage }) => {
                            return (
                                <Point
                                    key={dayIndex}
                                    x={dayIndex}
                                    y={phasePercentage}
                                    color={Theme.blue}
                                />
                            );
                        })}

                        {Array.from({ length: 12 }, (_, index) => {
                            return (
                                <Text
                                    key={index}
                                    x={index * 30.35 + 30.35 / 2}
                                    y={0}
                                    attach="n"
                                    attachDistance={56}
                                >
                                    {MONTH_NAMES[index]}
                                </Text>
                            );
                        })}

                        {Array.from({ length: 5 }, (_, index) => {
                            return (
                                <Text
                                    key={index}
                                    x={0}
                                    y={(index + 1) * 20}
                                    attach="w"
                                    attachDistance={20}
                                >
                                    {(index + 1) * 20}
                                </Text>
                            );
                        })}

                        <Text x={0} y={114} attach="w" attachDistance={20}>
                            %
                        </Text>

                        <g className="fragment">
                            <Text
                                x={0}
                                y={114}
                                attach="e"
                                attachDistance={40}
                                color={Theme.blue}
                                size={38}
                            >
                                Mondphase bei höchster Kulmination (2026)
                            </Text>
                        </g>
                    </Mafs>
                </div>
            </Slide>
        </>
    );
}
