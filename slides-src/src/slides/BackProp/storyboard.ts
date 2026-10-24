import type { BackPropStep } from './backprop-state-machine';

export const backPropStoryboard: BackPropStep[] = [
    {
        id: 'total-cost-function',
        network: {
            mode: 'focus',
        },
        eq: {
            show: {
                total_C_chain: [0, 6],
            },
        },
    },
    {
        id: 'output-activation-cost',
        network: {
            highlight: ['a_0^(2)'],
        },
        eq: {
            show: {
                C_of_a: [-7, 5.5],
            },
            hide: ['total_C_chain'],
        },
    },
    {
        id: 'output-activation-cost_derivative',
        eq: {
            show: {
                der_C_of_a: [1, 5.25],
            },
        },
    },
    {
        id: 'output-activation-weighted-sum',
        network: {
            highlight: ['s_0^(2)', 'z_0^(2)'],
        },
        eq: {
            show: {
                a_of_z: [-7.3, 2.5],
            },
        },
    },
    {
        id: 'output-activation-weighted-sum_derivative',
        eq: {
            show: {
                der_a_of_z: [0, 2.5],
            },
        },
    },
    {
        id: 'cost-weighted-sum_derivative',
        eq: {
            show: {
                der_C_of_z: [-7.2, -0.5],
                chain_rule: [-7, -2.7],
            },
        },
    },
    {
        id: 'delta_0^(2)',
        eq: {
            show: {
                'equals_delta_0^(2)': [-2.7, -0.4],
                'delta_0^(2)': [7.7, 1.4],
            },
        },
    },
    {
        id: 'delta_0^(2)_parked_definition',
        eq: {
            show: {
                'delta_0^(2)_parked_definition': [9.8, 5.7],
            },
            hide: [
                'C_of_a',
                'der_C_of_a',
                'a_of_z',
                'der_a_of_z',
                'der_C_of_z',
                'equals_delta_0^(2)',
                'chain_rule',
            ],
        },
    },
    {
        id: 'w_0,1^(2)',
        eq: {
            show: {
                'w_0,1^(2)': [4.5, 0.6],
            },
        },
    },
];
