import { Theme } from 'mafs';
import { MafsColors } from '../../consts';

export type BackPropEquationDef = {
    id: string;
    tex: string;
    color?: string;
};

export const backPropEquationDefs = [
    {
        id: 'total_C_chain',
        tex: String.raw`C \bigl( Y, A^{(2)} \bigl( Z^{(2)} \bigl( \textcolor{${MafsColors.green}}{W^{(2)}}, A^{(1)} \bigl( Z^{(1)} \bigl( \textcolor{${MafsColors.green}}{W^{(1)}}, A^{(0)} \bigl( X \bigr) \bigr) \bigr) \bigr) \bigr) \bigr)`,
    },
    {
        id: 'C_of_a',
        tex: String.raw`C \left( a_0^{(2)} \right) = \left( a_0^{(2)} - y_0 \right)^2`,
    },
    {
        id: 'der_C_of_a',
        tex: String.raw`\rightarrow \dfrac{\partial C}{\partial a_0^{(2)}} = 2 \left( a_0^{(2)} - y_0 \right)`,
    },
    {
        id: 'delta_0^(2)',
        tex: String.raw`\delta_0^{(2)}`,
        color: Theme.blue,
    },
    {
        id: 'w_0,1^(2)',
        tex: String.raw`w_{0,1}^{(2)}`,
    },
] as const satisfies readonly BackPropEquationDef[];
