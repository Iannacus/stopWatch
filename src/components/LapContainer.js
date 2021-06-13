import React from 'react';
import Lap from './Lap'
import '../styles/scrollBar.css';
import { useSelector } from 'react-redux';

function LapContainer() {
    const laps = useSelector(state => state.laps);
    let list = []

    for (let i = laps.length; i > 0; i--) {
        list.push(
            <Lap
                key={i}
                element={laps[i - 1]}
            />
        )

    }

    return (

        <div className='laps scroll'>
            {list}
        </div>

    )
}
export default LapContainer;