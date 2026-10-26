import BackPropEquation from './BackPropEquation';
import { backPropEquationDefs } from './EquationRegister';

export default function BackPropEquations() {
    return (
        <g style={{ fontSize: '0.65em' }}>
            {backPropEquationDefs.map((eq) => {
                return <BackPropEquation key={eq.id} {...eq} />;
            })}
        </g>
    );
}
