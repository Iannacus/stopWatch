import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../actions/counterActions';

function Menu() {
    const dispatch = useDispatch();
    const isRunning = useSelector(state => state.isRunning);
    const active = useSelector(state => state.showStopWatch);
    let cls1;
    let cls2
    if (active) {
        cls1 = 'active'
        cls2 = ''
    } else {
        cls1 = ''
        cls2 = 'active'
    }
    return (
        <div className='menu'>
            <button
                onClick={() => {
                    if (!isRunning)
                        active ? cls1 = 'active' : cls1 = '';
                    dispatch(setShow(true))
                }}
                className={`btn btn-menu ${cls1}`}>
                StopWatch
            </button>
            <button
                onClick={() => {
                    if (!isRunning)
                        active ? cls2 = 'active' : cls2 = '';
                    dispatch(setShow(false))
                }}
                className={`btn btn-menu ${cls2}`} >Timer</button>
        </div>
    )
}

export default Menu;