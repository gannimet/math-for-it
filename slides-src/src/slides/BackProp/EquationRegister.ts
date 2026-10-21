export type BackPropEquationDef = {
    id: string;
    tex: string;
};

export const backPropEquationDefs: BackPropEquationDef[] = [
    {
        id: 'C_of_a',
        tex: String.raw`C \left( a_0^{(2)} \right) = \left( a_0^{(2)} - y_0 \right)^2`,
    },
];
