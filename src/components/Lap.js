import React from 'react';
import Time from './Time';

function Lap({ element }) {
    return (
        <div className='time__container'>
            <Time
                min={element.min}
                sec={element.sec}
                ms={element.millis}
                fS={20}
            />
        </div>
    )
}
export default Lap;