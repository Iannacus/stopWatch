import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    incrementSeconds, resetMs, setRunning, setMinutesPercentage,
    initStopWatch, incrementMinutes, resetSec, resetMin, incrementAsync, setLaps, setIsStoped, resetLaps, setSecondsPercentage, currentSecs, resetCurrent
} from '../actions/counterActions';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Menu from './Menu';
import Time from './Time';
import { useEffect } from 'react';
import LapContainer from './LapContainer';
import '../styles/custom.css'


function StopWatch() {
    const currentSeconds = useSelector(state => state.current);
    const ms = useSelector(state => state.ms);
    const seconds = useSelector(state => state.seconds)
    const minutes = useSelector(state => state.minutes)
    const start = useSelector(state => state.start);
    const isRunning = useSelector(state => state.isRunning);
    const interval = useSelector(state => state.interval);
    const isStoped = useSelector(state => state.isStoped);
    const secondsPercentage = useSelector(state => state.secondsPercentage)
    const minutesPercentage = useSelector(state => state.minutesPercentage)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMin('00'));
        dispatch(resetSec('00'));
        dispatch(resetMs('00'));
    }, [dispatch])

    useEffect(() => {

        if (start && !isRunning) {
            dispatch(setRunning(true));
            dispatch(setIsStoped(false));
            dispatch(incrementAsync(true, interval, 10, false));

        }
    }, [start, isRunning, interval, dispatch]);

    useEffect(() => {
        if (ms > 99) {
            dispatch(currentSecs(1));
            dispatch(incrementSeconds(1));
            dispatch(resetMs('00'));
        }
    }, [ms, seconds, currentSeconds, dispatch]);

    useEffect(() => {
        dispatch(setSecondsPercentage(seconds));
        dispatch(setMinutesPercentage(currentSeconds));
        if (seconds > 59) {
            dispatch(incrementMinutes(1))
            dispatch(resetSec('00'));
            dispatch(setSecondsPercentage(0));
        }
    }, [currentSeconds, seconds, minutes, dispatch]);

    const stopWatch = () => {
        dispatch(setIsStoped(true));
        dispatch(setRunning(false));
        dispatch(initStopWatch(false));
        dispatch(incrementAsync(false, interval, 10, false));
    }

    const resetWatch = () => {
        dispatch(setIsStoped(false));
        dispatch(resetMs('00'));
        dispatch(resetSec('00'));
        dispatch(resetMin('00'));
        dispatch(resetCurrent(0));
        dispatch(setSecondsPercentage(0));
        dispatch(setMinutesPercentage(0));
        dispatch(resetLaps([]));
    }


    return (
        <div className='stopWatch-container '>
            <div className='sup container'>
                <Menu />
                <div className='time_circle'>
                    <CircularProgressbarWithChildren value={secondsPercentage + 1} strokeWidth={3}>
                        <CircularProgressbarWithChildren width={90} heigth={90} value={minutesPercentage + 1} strokeWidth={3}>
                            <Time
                                min={minutes}
                                sec={seconds}
                                ms={ms}
                                fS={48}
                            />
                        </CircularProgressbarWithChildren>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div className='bot'>
                <div className='container'>
                    <LapContainer />
                    <div className='buttons'>
                        {!isRunning ? <button className='btn' onClick={() => dispatch(initStopWatch(true))}>Start</button> : null}
                        {isRunning ? <button className='btn' onClick={() => stopWatch()}>Stop</button> : null}
                        {isRunning ? <button className='btn' onClick={() => dispatch(setLaps({ min: minutes, sec: seconds, millis: ms }))}>Lap</button> : null}
                        {isStoped ? <button className='btn' onClick={() => { resetWatch() }}>Reset</button> : null}
                    </div>
                </div>
            </div>






        </div>
    )
}
export default StopWatch;