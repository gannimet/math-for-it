import { Slide } from '@revealjs/react';
import MathEl from '../common/MathEl';
import './TermsMiscellaneous.css';

export default function TermsMiscellaneous() {
    return (
        <Slide>
            <div className="r-stretch terms-block">
                <MathEl tex={String.raw`x^3`} asBlock={true} />
                <MathEl tex={String.raw`a(b+c)`} asBlock={true} />
                <MathEl tex={String.raw`f(x)`} asBlock={true} />
                <MathEl tex={String.raw`\frac{3}{4}`} asBlock={true} />
                <MathEl tex={String.raw`\left| a \right|`} asBlock={true} />
                <MathEl tex={String.raw`\sqrt{16}`} asBlock={true} />
                <MathEl tex={String.raw`\sqrt[3]{81}`} asBlock={true} />
                <MathEl tex={String.raw`x^\frac{1}{2}`} asBlock={true} />
                <MathEl tex={String.raw`\log_2(8)`} asBlock={true} />
                <MathEl tex={String.raw`\text{e}^x`} asBlock={true} />
                <MathEl tex={String.raw`\ln(x)`} asBlock={true} />
                <MathEl tex={String.raw`(3, 1)`} asBlock={true} />
                <MathEl tex={String.raw`\{3, 1\}`} asBlock={true} />
                <MathEl tex={String.raw`90^\circ`} asBlock={true} />
                <MathEl tex={String.raw`\pi`} asBlock={true} />
                <MathEl tex={String.raw`\sum^{\infty}_{n=0} \; \frac{1}{n}`} asBlock={true} />
            </div>
        </Slide>
    );
}
