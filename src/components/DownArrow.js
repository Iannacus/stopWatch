import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementHours, incrementMinutes, incrementSeconds, resetHours, resetMin, resetSec } from '../actions/counterActions';
import downArrow from '../src/img/arrowDown.png'

function DownArrow({ update }) {
    const minutes = useSelector(state => state.minutes)
    const hour = useSelector(state => state.hour);
    const seconds = useSelector(state => state.seconds)
    const handleUpdate = updt => {
        if (updt === 'min') {
            if (hour > 1)
                dispatch(incrementHours(-1));
            else
                dispatch(resetHours(23));
        }
        if (updt === 'sec') {
            if (minutes > 0)
                dispatch(incrementMinutes(-1));
            else
                dispatch(resetMin(59));
        }
        if (updt === 'ms') {
            if (seconds > 0)
                dispatch(incrementSeconds(-1));
            else
                dispatch(resetSec(59))
        }
    }
    const dispatch = useDispatch();
    return (
        <img onClick={() => handleUpdate(update)} src={downArrow} alt='up arrow'></img>
    )
}

export default DownArrow;