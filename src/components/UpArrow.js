import { useDispatch, useSelector } from 'react-redux';
import { incrementHours, incrementMinutes, incrementSeconds, resetHours, resetMin, resetSec } from '../actions/counterActions';
import upArrow from '../src/img/arrowUp.png'

function UpArrow({ update }) {
    const minutes = useSelector(state => state.minutes)
    const hour = useSelector(state => state.hour);
    const seconds = useSelector(state => state.seconds)

    const handleUpdate = updt => {
        if (updt === 'min') {
            if (hour > 22) {
                dispatch(resetHours('00'));

            } else
                dispatch(incrementHours(1));

        }
        if (updt === 'sec')
            if (minutes > 58)
                dispatch(resetMin('00'));
            else
                dispatch(incrementMinutes(1));
        if (updt === 'ms')
            if (seconds > 58)
                dispatch(resetSec('00'));
            else
                dispatch(incrementSeconds(1));
    }
    const dispatch = useDispatch();
    return (
        <img onClick={() => handleUpdate(update)} src={upArrow} alt='up arrow'></img>
    )
}

export default UpArrow;