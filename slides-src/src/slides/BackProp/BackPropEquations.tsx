import { LaTeX } from 'mafs';
import { MafsColors } from '../../consts';

export default function BackPropEquations() {
    return (
        <>
            <g fontSize="0.7em">
                <LaTeX
                    at={[-4, 6]}
                    tex={String.raw`\dfrac{\partial C}{\partial z_{0}^{(2)}} = \dfrac{\partial C}{\partial a_0^{(2)}} \dfrac{\partial a_0^{(2)}}{\partial z_0^{(2)}} = 2 \left( a_0^{(2)} - y_0 \right) \cdot \sigma^{\prime} \left( z_0^{(2)} \right) = \textcolor{${MafsColors.blue}}{\delta_0^{(2)}}`}
                />

                <LaTeX
                    at={[-6.7, 3]}
                    tex={String.raw`\dfrac{\partial C}{\partial w_{0,1}^{(2)}} = \dfrac{\partial C}{\partial z_0^{(2)}} \dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}} = \textcolor{${MafsColors.blue}}{\delta_0^{(2)}} \cdot \dfrac{\partial z_0^{(2)}}{\partial w_{0,1}^{(2)}}`}
                />

                <LaTeX
                    at={[0.5, 3.1]}
                    tex={String.raw`= \textcolor{${MafsColors.blue}}{\delta_0^{(2)}} \cdot a_1^{(1)}`}
                />
            </g>
        </>
    );
}
