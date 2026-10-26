import { MafsColors } from '../../consts';

export type BackPropEquationDef = {
    id: string;
    tex: string;
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
        tex: String.raw`\rightarrow \textcolor{${MafsColors.orange}}{\dfrac{\partial C}{\partial a_0^{(2)}}} = 2 \left( a_0^{(2)} - y_0 \right)`,
    },
    {
        id: 'a_of_z',
        tex: String.raw`a_0^{(2)} \left( z_0^{(2)} \right) = \sigma \left( z_0^{(2)} \right)`,
    },
    {
        id: 'der_a_of_z',
        tex: String.raw`\rightarrow \textcolor{${MafsColors.yellow}}{\dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}}} = \sigma^{\prime} \left( z_0^{(2)} \right)`,
    },
    {
        id: 'der_C_of_z',
        tex: String.raw`\rightarrow \dfrac{\partial C}{\partial z_0^{(2)}} = \textcolor{${MafsColors.orange}}{\dfrac{\partial C}{\partial a_0^{(2)}}} \textcolor{${MafsColors.yellow}}{\dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}}}`,
    },
    {
        id: 'chain_rule',
        tex: String.raw`\text{(Kettenregel)}`,
    },
    {
        id: 'equals_delta_0^(2)',
        tex: String.raw`= \textcolor{${MafsColors.blue}}{\delta_0^{(2)}}`,
    },
    {
        id: 'delta_0^(2)',
        tex: String.raw`\textcolor{${MafsColors.blue}}{\delta_0^{(2)}}`,
    },
    {
        id: 'delta_0^(2)_parked_definition',
        tex: String.raw`\textcolor{${MafsColors.blue}}{\delta_0^{(2)}} = \dfrac{\partial C}{\partial a_0^{(2)}} \dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}}`,
    },
    {
        id: 'z0_of_a',
        tex: String.raw`\displaystyle z_0^{(2)} = \sum\limits_{i} \; a_i^{(1)} \, w_{0,i}^{(2)}`,
    },
    {
        id: 'w_0,0^(2)',
        tex: String.raw`\textcolor{${MafsColors.pink}}{w_{0,0}^{(2)}}`,
    },
    {
        id: 'w_0,1^(2)',
        tex: String.raw`w_{0,1}^{(2)}`,
    },
    {
        id: 'w_0,2^(2)',
        tex: String.raw`w_{0,2}^{(2)}`,
    },
    {
        id: 'der_z0_of_a1',
        tex: String.raw`\rightarrow \dfrac{\partial z_0^{(2)}}{\partial a_1^{(1)}} = w_{0,1}^{(2)}`,
    },
    {
        id: 'w_1,0^(2)',
        tex: String.raw`\textcolor{${MafsColors.pink}}{w_{1,0}^{(2)}}`,
    },
    {
        id: 'w_1,1^(2)',
        tex: String.raw`w_{1,1}^{(2)}`,
    },
    {
        id: 'w_1,2^(2)',
        tex: String.raw`w_{1,2}^{(2)}`,
    },
    {
        id: 'z1_of_a',
        tex: String.raw`\displaystyle z_1^{(2)} = \sum\limits_{i} \; a_i^{(1)} \, w_{1,i}^{(2)}`,
    },
    {
        id: 'der_z1_of_a1',
        tex: String.raw`\rightarrow \dfrac{\partial z_1^{(2)}}{\partial a_1^{(1)}} = w_{1,1}^{(2)}`,
    },
] as const satisfies readonly BackPropEquationDef[];
