import { Theme } from 'mafs';

export type BackPropEquationDef = {
    id: string;
    tex: string;
    color?: string;
};

export const backPropEquationDefs: BackPropEquationDef[] = [
    {
        id: 'C_of_a',
        tex: String.raw`C \left( a_0^{(2)} \right) = \left( a_0^{(2)} - y_0 \right)^2`,
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
];
