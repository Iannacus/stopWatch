import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setRunning,
    initStopWatch, incrementMinutes, resetSec, resetMin, incrementAsync, setIsStoped, resetHours, incrementHours, setTotal, currentSecs, timerPercentage, resetCurrent
} from '../actions/counterActions';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Menu from './Menu';
import Time from './Time';
import { useEffect, useCallback } from 'react';
import LapContainer from './LapContainer';
import '../styles/custom.css'


function Timer() {
    const seconds = useSelector(state => state.seconds);
    const minutes = useSelector(state => state.minutes);
    const hour = useSelector(state => state.hour);
    const start = useSelector(state => state.start);
    const isRunning = useSelector(state => state.isRunning);
    const interval = useSelector(state => state.interval);
    const isStoped = useSelector(state => state.isStoped);
    const totalTime = useSelector(state => state.total);
    const currentTime = useSelector(state => state.current);
    const barPercentage = useSelector(state => state.timerPercentage)


    const dispatch = useDispatch();

    useEffect(() => {

        if (start && !isRunning) {

            dispatch(setRunning(true));
            dispatch(setIsStoped(false));
            if (hour > 0 || minutes > 0 || seconds > 0) {
                if (seconds < 1) {
                    dispatch(resetSec('59'));
                    if (minutes > 0) {
                        dispatch(incrementMinutes(-1));
                    } else if (hour > 0) {
                        dispatch(incrementHours(-1));
                        dispatch(resetMin(59));
                    }
                }
                dispatch(incrementAsync(true, interval, 1000, true, seconds));
            }
        }
    }, [start, isRunning, dispatch, interval, hour, minutes, seconds]);

    useEffect(() => {
        if (seconds < 1) {
            if (isRunning)
                dispatch(currentSecs(1));
            if (minutes > 0) {
                dispatch(incrementMinutes(-1))
                dispatch(resetSec('59'));
            } else {
                dispatch(resetSec('00'));
            }

        } else {
            if (isRunning)
                dispatch(currentSecs(1));
        }
    }, [seconds, minutes, isRunning, dispatch]);

    useEffect(() => {
        if (minutes < 1) {
            if (hour > 0) {
                dispatch(incrementHours(-1))
                dispatch(resetMin('59'));
            } else {
                dispatch(resetMin('00'));
            }

        }
    }, [minutes, hour, dispatch]);

    useEffect(() => {
        if (hour < 1) {
            dispatch(resetHours('00'));
        }
    }, [hour, dispatch]);

    //useEffect para actualizar los valores en la barra de progreso
    useEffect(() => {
        const totalSeconds = Number(seconds) + Number((minutes * 60)) + Number((hour * 3600));
        if (isRunning) {
            const per = currentTime * 100 / totalTime;
            dispatch(timerPercentage(100 - per));
        } else {
            dispatch(setTotal(totalSeconds));
        }
    }, [seconds, minutes, hour, currentTime, isRunning, totalTime, dispatch]);


    const stopWatch = useCallback(
        () => {
            dispatch(setIsStoped(true));
            dispatch(setRunning(false));
            dispatch(initStopWatch(false));
            dispatch(incrementAsync(false, interval));
        },
        [dispatch, interval],
    );

    const resetWatch = useCallback(
        () => {
            dispatch(setIsStoped(false));
            dispatch(resetSec('00'));
            dispatch(resetMin('00'));
            dispatch(resetHours('00'));
            dispatch(resetCurrent(0));
            dispatch(timerPercentage(100));
        },
        [dispatch],
    );

    useEffect(() => {
        resetWatch();
    }, [resetWatch])

    //detener el temporizador cunado todos lso valores lleguen a 0 
    useEffect(() => {
        if (isRunning) {
            if (hour < 1 && minutes < 1 && seconds < 1) {
                stopWatch();
                resetWatch();
            }
        }
    }, [hour, minutes, seconds, isRunning, stopWatch, resetWatch]);


    return (
        <div className='stopWatch-container '>
            <div className='sup container'>
                <Menu />
                <div className='time_circle'>
                    <CircularProgressbarWithChildren value={barPercentage} strokeWidth={3}>
                        <Time
                            min={hour}
                            sec={minutes}
                            ms={seconds}
                            fS={48}
                        />
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div className='bot'>
                <div className='container'>
                    <LapContainer />
                    <div className='buttons'>
                        {!isRunning ? <button className='btn' onClick={() => dispatch(initStopWatch(true))}>Start</button> : null}
                        {isRunning ? <button className='btn' onClick={() => stopWatch()}>Stop</button> : null}
                        {isStoped ? <button className='btn' onClick={() => { resetWatch() }}>Reset</button> : null}
                    </div>
                </div>
            </div>






        </div>
    )
}
export default Timer;