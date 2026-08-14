import katex from 'katex';
import { LATEX_MACROS } from '../latex.macros';

export type MathProps = {
    tex: string;
    asBlock?: boolean;
};

export default function MathEl({ tex, asBlock }: MathProps) {
    const html = katex.renderToString(tex, {
        displayMode: asBlock,
        macros: LATEX_MACROS,
    });

    return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
}
