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
        id: 'der_z0_of_w01',
        tex: String.raw`\rightarrow \textcolor{${MafsColors.green}}{\dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}} = a_1^{(1)}}`,
    },
    {
        id: 'der_C_of_w_01',
        tex: String.raw`
            \rightarrow \dfrac{\partial C}{\partial w_{0,1}^{(2)}} =
            \textcolor{${MafsColors.blue}}{
                \dfrac{\partial C}{\partial a_0^{(2)}}
                \dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}}
            }
            \textcolor{${MafsColors.green}}{
                \dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}}
            } =
            \textcolor{${MafsColors.blue}}{\delta_0^{(2)}} \cdot \textcolor{${MafsColors.green}}{a_1^{(1)}}
        `,
    },
    {
        id: 'der_C_of_w_01_expansion',
        tex: String.raw`
            =
            \textcolor{${MafsColors.blue}}{
                2 \left( a_0^{(2)} - y_0 \right)
            }
            \cdot
            \textcolor{${MafsColors.blue}}{
                \sigma^{\prime} \left( z_0^{(2)} \right)
            }
            \cdot
            \textcolor{${MafsColors.green}}{
                a_1^{(1)}
            }
        `,
    },
    {
        id: 'output-weights-general-explainer',
        tex: String.raw`
        \rightarrow \;
        \begin{aligned}
            &\text{Ableitung nach den anderen} \\
            &\text{Output-Gewichten analog.}
        \end{aligned}
        `,
    },
    {
        id: 'der_z0_of_a1',
        tex: String.raw`\rightarrow \dfrac{\partial z_0^{(2)}}{\partial a_1^{(1)}} = \textcolor{${MafsColors.yellow}}{w_{0,1}^{(2)}}`,
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
        tex: String.raw`\rightarrow \dfrac{\partial z_1^{(2)}}{\partial a_1^{(1)}} = \textcolor{${MafsColors.yellow}}{w_{1,1}^{(2)}}`,
    },
    {
        id: 'a_1^1-multi-path-explainer',
        tex: String.raw`\begin{aligned}
            &a_1^{(1)} \text{ beeinflusst die} \\
            &\text{Kosten über beide Pfade.}
            \end{aligned}`,
    },
    {
        id: 'delta_1^(2)',
        tex: String.raw`\textcolor{${MafsColors.blue}}{\delta_1^{(2)}}`,
    },
    {
        id: 'delta_i^(l)_parked_definition',
        tex: String.raw`\textcolor{${MafsColors.blue}}{\delta_j^{(l)}} = \dfrac{\partial C}{\partial a_j^{(l)}} \dfrac{\partial a_j^{(l)}}{\partial z_j^{(l)}}`,
    },
    {
        id: 'der_C_of_a1_inner_explainer',
        tex: String.raw`
        \begin{aligned}
            &\text{Addieren der Pfade} \\
            &\text{und Kettenregel ergibt:}
        \end{aligned}
        `,
    },
    {
        id: 'der_C_of_a1_inner',
        tex: String.raw`
            \displaystyle
            \dfrac{\partial C}{\partial a_1^{(1)}}
            =
            \textcolor{${MafsColors.blue}}{\dfrac{\partial C}{\partial z_0^{(2)}}}
            \,
            \textcolor{${MafsColors.yellow}}{w_{0,1}^{(2)}}
            +
            \textcolor{${MafsColors.blue}}{\dfrac{\partial C}{\partial z_1^{(2)}}}
            \,
            \textcolor{${MafsColors.yellow}}{w_{1,1}^{(2)}}
            =
            \textcolor{${MafsColors.blue}}{\delta_0^{(2)}}
            \,
            \textcolor{${MafsColors.yellow}}{w_{0,1}^{(2)}}
            +
            \textcolor{${MafsColors.blue}}{\delta_1^{(2)}}
            \,
            \textcolor{${MafsColors.yellow}}{w_{1,1}^{(2)}}
        `,
    },
    {
        id: 'der_C_of_a1_inner_shortened',
        tex: String.raw`
        \displaystyle
        \dfrac{\partial C}{\partial a_1^{(1)}}
        =
        \sum_i \;
        \textcolor{${MafsColors.blue}}{\delta_i^{(2)}}
        \,
        w_{i,1}^{(2)}
        `,
    },
    {
        id: 'a_of_z_inner',
        tex: String.raw`a_1^{(1)} \left( z_1^{(1)} \right) = \sigma \left( z_1^{(1)} \right)`,
    },
    {
        id: 'der_a_of_z_inner',
        tex: String.raw`
        \rightarrow
        \dfrac{\partial a_1^{(1)}}{\partial z_1^{(1)}} 
        =
        \textcolor{${MafsColors.green}}{\sigma^{\prime} \left( z_1^{(1)} \right)}`,
    },
    {
        id: 'delta_1^(1)_explainer',
        tex: String.raw`
        \begin{aligned}
            &\text{Gesamtableitung bis zu } z_1^{(1)} \text{ in} \\
            &\text{der Variable } \textcolor{${MafsColors.blue}}{\delta_1^{(1)}} \text{ (Kettenregel):}
        \end{aligned}
        `,
    },
    {
        id: 'delta_1^(1)',
        tex: String.raw`\textcolor{${MafsColors.blue}}{\delta_1^{(1)}}`,
    },
    {
        id: 'delta_1^(1)_formula',
        tex: String.raw`
            \textcolor{${MafsColors.blue}}{\delta_1^{(1)}}
            =
            \dfrac{\partial C}{\partial a_1^{(1)}}
            \cdot
            \textcolor{${MafsColors.green}}{\sigma^{\prime} \left( z_1^{(1)} \right)}
        `,
    },
    {
        id: 'delta_1^(1)_formula_expansion',
        tex: String.raw`
        =
        \displaystyle
        \left(
        \sum_i \;
        \textcolor{${MafsColors.blue}}{\delta_i^{(2)}}
        \,
        w_{i,1}^{(2)}
        \right)
        \cdot
        \textcolor{${MafsColors.green}}{\sigma^{\prime} \left( z_1^{(1)} \right)}
        `,
    },
    {
        id: 'w_1,0^(1)',
        tex: String.raw`\textcolor{${MafsColors.pink}}{w_{1,0}^{(1)}}`,
    },
    {
        id: 'w_1,1^(1)',
        tex: String.raw`w_{1,1}^{(1)}`,
    },
    {
        id: 'w_1,2^(1)',
        tex: String.raw`w_{1,2}^{(1)}`,
    },
    {
        id: 'z_1^(1)_of_inner_weights',
        tex: String.raw`
        \displaystyle
        z_1^{(1)} = \sum\limits_{i} \; a_i^{(0)} \, w_{1,i}^{(1)}
        `,
    },
    {
        id: 'der_z_1^(1)_of_w_1,2^(1)',
        tex: String.raw`
        \rightarrow
        \textcolor{${MafsColors.green}}
        {
            \dfrac{\partial z_1^{(1)}}{\partial w_{1,2}^{(1)}}
            =
            a_2^{(0)}
        }
        `,
    },
    {
        id: 'der_C_of_w12_inner',
        tex: String.raw`
        \begin{aligned}
        \rightarrow
        \dfrac{\partial C}{\partial w_{1,2}^{(1)}}
        &=
        \textcolor{${MafsColors.blue}}
        {
            \dfrac{\partial C}{\partial a_1^{(1)}}
            \dfrac{\partial a_1^{(1)}}{\partial z_1^{(1)}}
        }
        \textcolor{${MafsColors.green}}{
            \dfrac{\partial z_1^{(1)}}{\partial w_{1,2}^{(1)}}
        } 
        =
        \textcolor{${MafsColors.blue}}{\delta_1^{(1)}}
        \cdot
        \textcolor{${MafsColors.green}}{a_2^{(0)}}
        \end{aligned}
        `,
    },
    {
        id: 'der_C_of_w12_inner_expansion',
        tex: String.raw`
        =
        \displaystyle
        \textcolor{${MafsColors.blue}}
        {
            \left(
            \sum_i \;
            \delta_i^{(2)}
            \,
            w_{i,1}^{(2)}
            \right)
            \cdot
            \sigma^{\prime} \left( z_1^{(1)} \right)
        }
        \cdot
        \textcolor{${MafsColors.green}}{a_2^{(0)}}
        `,
    },
    {
        id: 'inner-weights-general-explainer',
        tex: String.raw`
        \rightarrow \;
        \begin{aligned}
            &\text{Ableitung nach den anderen} \\
            &\text{inneren Gewichten analog.}
        \end{aligned}
        `,
    },
    {
        id: 'summary',
        tex: String.raw`\text{Zusammenfassend:}`,
    },
    {
        id: 'total_der_of_C',
        tex: String.raw`
        \dfrac{\partial C}{\partial w_{jk}^{(l)}}
        =
        \textcolor{${MafsColors.blue}}{
            \dfrac{\partial C}{\partial a_{j}^{(l)}}
            \dfrac{\partial a_{j}^{(l)}}{\partial z_{j}^{(l)}}
        }
        \textcolor{${MafsColors.green}}{
            \dfrac{\partial z_{j}^{(l)}}{\partial w_{jk}^{(l)}}
        }
        =
        \textcolor{${MafsColors.blue}}{\delta_j^{(l)}}
        \cdot
        \textcolor{${MafsColors.green}}{a_k^{(l-1)}}
        `,
    },
    {
        id: 'with',
        tex: String.raw`\text{mit:}`,
    },
    {
        id: 'delta_formula_full',
        tex: String.raw`
        \displaystyle
        \textcolor{${MafsColors.blue}}{\delta_j^{(l)}}
        =
        \begin{cases}
        \; 2 \left( a_j^{(l)} - y_j \right) \cdot \sigma^{\prime} \left( z_j^{(l)} \right) & \text{für Output-Neuronen} \\[1.5em]
        \;
        \left(
            \sum\limits_{i} \; \textcolor{${MafsColors.blue}}{\delta_i^{(l+1)}} \, w_{ij}^{(l+1)}
        \right)
        \cdot
        \sigma^{\prime} \left( z_j^{(l)} \right) & \text{für innere Neuronen}
        \end{cases}
        `,
    },
    {
        id: 'delta_w_definition',
        tex: String.raw`
        \text{Anpassung der Gewichte:} \;\;
        \Delta w_{jk}^{(l)} = - \eta \cdot \dfrac{\partial C}{\partial w_{jk}^{(l)}}
        `,
    },
    {
        id: 'add_delta_w_to_w',
        tex: String.raw`
        \rightarrow \; w_{jk}^{(l)} := w_{jk}^{(l)} + \Delta w_{jk}^{(l)}
        `,
    },
] as const satisfies readonly BackPropEquationDef[];
