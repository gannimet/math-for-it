import type { BackPropStep } from './backprop-state-machine';

export const backPropStoryboard: BackPropStep[] = [
    {
        id: 'total-cost-function',
        network: {
            mode: 'focus',
        },
        eq: {
            show: {
                total_C_chain: [0, 5.5],
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
        id: 'delta_0^(2)',
        eq: {
            show: {
                'delta_0^(2)': [7.7, 1.4],
            },
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
