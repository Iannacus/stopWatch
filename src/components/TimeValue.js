import React from 'react';
import { useSelector } from 'react-redux';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow'

function TimeValue({ value, update }) {

    const showStopWatch = useSelector(state => state.showStopWatch);
    const isRunning = useSelector(state => state.isRunning)


    return (
        <div className='time__value'>
            {!showStopWatch && !isRunning ?
                <UpArrow
                    update={update}
                /> : null}

            <p className='picker'>{value}</p>
            {!showStopWatch && !isRunning ?
                <DownArrow
                    update={update}
                /> : null}


        </div>

    )
}
export default TimeValue;