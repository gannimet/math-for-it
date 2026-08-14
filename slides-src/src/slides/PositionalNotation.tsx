import { Fragment, Slide } from '@revealjs/react';
import MathEl from '../common/MathEl';
import './PositionalNotation.css';

const digitColor = '#3f8';

export default function PositionalNotation() {
    return (
        <Slide>
            <h2>Stellenwertsysteme</h2>

            <div className="positional-examples">
                <div className="example-1">
                    <MathEl tex={String.raw`257_{10}`} />{' '}
                    <span className="fragment">
                        <MathEl
                            tex={String.raw`
= \textcolor{${digitColor}}{2} \cdot \underbrace{100\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 10^2}}
+\;
\textcolor{${digitColor}}{5} \cdot \underbrace{10\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 10^1}}
+\;
\textcolor{${digitColor}}{7} \cdot \underbrace{1\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 10^0}}`}
                        />
                    </span>
                </div>

                <Fragment>
                    <div className="example-1">
                        <MathEl tex={String.raw`101_2`} />{' '}
                        <span className="fragment">
                            <MathEl
                                tex={String.raw`
= \textcolor{${digitColor}}{1} \cdot \underbrace{4\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 2^2}}
+\;
\textcolor{${digitColor}}{0} \cdot \underbrace{2\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 2^1}}
+\;
\textcolor{${digitColor}}{1} \cdot \underbrace{1\rule[-3pt]{0pt}{0pt}}_{\substack{\\ 2^0}}`}
                            />
                        </span>
                    </div>
                </Fragment>
            </div>
        </Slide>
    );
}
