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
            highlight: ['n_0^(2)', 'a_0^(2)'],
        },
        eq: {
            show: {
                C_of_a: [-8, 5.5],
            },
            hide: ['total_C_chain'],
        },
    },
    {
        id: 'output-activation-cost_derivative',
        eq: {
            show: {
                der_C_of_a: [-0.8, 5.25],
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
                a_of_z: [-8.3, 2.5],
            },
        },
    },
    {
        id: 'output-activation-weighted-sum_derivative',
        eq: {
            show: {
                der_a_of_z: [-1.9, 2.5],
            },
        },
    },
    {
        id: 'cost-weighted-sum_derivative',
        eq: {
            show: {
                der_C_of_z: [-8.2, -0.5],
                chain_rule: [-8, -2.5],
            },
        },
    },
    {
        id: 'delta_0^(2)',
        eq: {
            show: {
                'equals_delta_0^(2)': [-4, -0.4],
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
        id: 'output-weighted-sum_of_output-weight_1',
        network: {
            highlight: [
                'w_0,0^(2)',
                'w_0,1^(2)',
                'w_0,2^(2)',
                'n_0^(1)',
                'n_1^(1)',
                'n_2^(1)',
                'a_0^(1)',
                'a_1^(1)',
                'a_2^(1)',
            ],
            unhighlight: ['a_0^(2)', 's_0^(2)'],
        },
        eq: {
            show: {
                'z0_of_a': [-9, 5.5],
                'w_0,0^(2)': [4.3, 2.6],
                'w_0,1^(2)': [4, 0.6],
                'w_0,2^(2)': [4.3, -2.7],
            },
        },
    },
    {
        id: 'output-weighted-sum_of_output-weight_derivative_1',
        network: {
            unhighlight: ['w_0,0^(2)', 'w_0,2^(2)', 'n_0^(1)', 'n_2^(1)', 'a_0^(1)', 'a_2^(1)'],
        },
        eq: {
            show: {
                der_z0_of_w01: [-3.4, 5.7],
            },
            hide: ['w_0,0^(2)', 'w_0,2^(2)'],
        },
    },
    {
        id: 'C_chain-rule-to-output-weight',
        eq: {
            show: {
                der_C_of_w_01: [-5.8, 2.9],
                chain_rule: [-5.8, 0.9],
            },
        },
    },
    {
        id: 'C_chain-rule-to-output-weight_expansion',
        eq: {
            show: {
                der_C_of_w_01_expansion: [4.5, 2.9],
            },
        },
    },
    {
        id: 'purge_output-derivative-formulas',
        network: {
            highlight: ['n_0^(1)', 'a_0^(1)', 'n_2^(1)', 'a_2^(1)', 'w_0,0^(2)', 'w_0,2^(2)'],
        },
        eq: {
            show: {
                'w_0,0^(2)': [4.3, 2.6],
                'w_0,2^(2)': [4.3, -2.7],
            },
            hide: ['der_z0_of_w01', 'der_C_of_w_01', 'der_C_of_w_01_expansion', 'chain_rule'],
        },
    },
    {
        id: 'output-weighted-sum_of_inner-activation_derivative_1',
        network: {
            unhighlight: ['n_0^(1)', 'a_0^(1)', 'n_2^(1)', 'a_2^(1)', 'w_0,0^(2)', 'w_0,2^(2)'],
        },
        eq: {
            show: {
                der_z0_of_a1: [-3.4, 5.7],
            },
            hide: ['w_0,0^(2)', 'w_0,2^(2)'],
        },
    },
    {
        id: 'output-weighted-sum_of_inner-activation_2',
        network: {
            highlight: [
                'w_1,0^(2)',
                'w_1,1^(2)',
                'w_1,2^(2)',
                'n_0^(1)',
                'n_1^(1)',
                'n_2^(1)',
                'a_0^(1)',
                'a_1^(1)',
                'a_2^(1)',
                'n_1^(2)',
                'z_1^(2)',
            ],
            unhighlight: ['w_0,1^(2)', 'n_0^(2)', 'z_0^(2)', 's_0^(2)'],
        },
        eq: {
            show: {
                'w_1,0^(2)': [3.5, 1.7],
                'w_1,1^(2)': [4.5, -1.2],
                'w_1,2^(2)': [3.5, -2.9],
                'z1_of_a': [-9, 2.7],
            },
            hide: ['w_0,1^(2)'],
            fade: ['z0_of_a', 'der_z0_of_a1'],
        },
    },
    {
        id: 'output-weighted-sum_of_inner-activation_derivative_2',
        network: {
            unhighlight: ['n_0^(1)', 'n_2^(1)', 'a_0^(1)', 'a_2^(1)', 'w_1,0^(2)', 'w_1,2^(2)'],
        },
        eq: {
            show: {
                der_z1_of_a1: [-3.4, 2.9],
            },
            hide: ['w_1,0^(2)', 'w_1,2^(2)'],
        },
    },
    {
        id: 'a_1^1-multi-path-explainer',
        network: {
            highlight: [
                'w_0,1^(2)',
                'n_0^(2)',
                'z_0^(2)',
                's_0^(2)',
                'a_0^(2)',
                's_1^(2)',
                'a_1^(2)',
            ],
        },
        eq: {
            show: {
                'a_1^1-multi-path-explainer': [3.5, 4.5],
                'w_0,1^(2)': [4, 0.6],
                'delta_1^(2)': [7.7, -2.2],
                'delta_i^(l)_parked_definition': [9.8, 5.7],
            },
            hide: ['delta_0^(2)_parked_definition'],
            unfade: ['z0_of_a', 'der_z0_of_a1'],
        },
    },
    {
        id: 'der_C_of_a1_inner_sum',
        eq: {
            show: {
                der_C_of_a1_inner_explainer: [-8.2, -0.5],
                der_C_of_a1_inner: [-4.2, -3.2],
            },
        },
    },
    {
        id: 'der_C_of_a1_inner_sum_shortened',
        eq: {
            hide: ['der_C_of_a1_inner'],
            show: {
                der_C_of_a1_inner_shortened: [-8.67, -3.23],
            },
        },
    },
    {
        id: 'purge_inner-activation-derivation-formulas',
        network: {
            unhighlight: ['z_0^(2)', 's_0^(2)', 'a_0^(2)', 'z_1^(2)', 's_1^(2)', 'a_1^(2)'],
        },
        eq: {
            hide: [
                'z0_of_a',
                'z1_of_a',
                'der_z0_of_a1',
                'der_z1_of_a1',
                'der_C_of_a1_inner_explainer',
                'a_1^1-multi-path-explainer',
            ],
            show: {
                der_C_of_a1_inner_shortened: [3.4, 5.6],
            },
        },
    },
    {
        id: 'a_of_z_inner',
        network: {
            highlight: ['s_1^(1)', 'z_1^(1)'],
        },
        eq: {
            show: {
                a_of_z_inner: [-8.2, 5.5],
            },
        },
    },
    {
        id: 'a_of_z_inner_derivative',
        eq: {
            show: {
                der_a_of_z_inner: [-8.3, 3],
            },
        },
    },
    {
        id: 'delta_1^(1)',
        eq: {
            show: {
                'delta_1^(1)_explainer': [-6.8, -0.6],
                'delta_1^(1)': [-1.3, 1.4],
                'delta_1^(1)_formula': [-8, -3.6],
            },
        },
    },
    {
        id: 'delta_1^(1)_expansion',
        eq: {
            show: {
                'delta_1^(1)_formula_expansion': [-0.6, -3.73],
            },
        },
    },
];
