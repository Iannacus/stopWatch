import React from 'react';
import TimeValue from './TimeValue';
function Time({ min, sec, ms, fS }) {
    return (

        <div className='time' style={{ fontSize: fS }}>
            <TimeValue
                value={min}
                update={'min'}
            />
            <div className='time__separator'>:</div>
            <TimeValue
                value={sec}
                update={'sec'}
            />
            <div className='time__separator'>:</div>
            <TimeValue
                value={ms}
                update={'ms'}
            />
        </div>

    )
}
export default Time;