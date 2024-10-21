// import add from '../../utilities/calculator';
import { add, multiply, divideByTwo as divide } from '../../utilities/calculator';
import Watch from '../watch/watch';
import './sunGlass.css'
const SunGlass = () => {

    const f = 50;
    const s = 25;
    const sum = add(f, s);
    const mult= multiply(f, s)
    const vaag = divide(f, s)
    console.log(mult)
    console.log(vaag)
    return (
        <div>
            <p>sum:{sum}</p>
            <p>Vaag:{vaag}</p>
            <Watch></Watch>
        </div>
    );
};

export default SunGlass;