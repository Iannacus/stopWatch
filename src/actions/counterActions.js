export const inc = (incrementValue) => ({
    type: 'increment',
    payload: incrementValue
})

export const dec = (decrementValue) => ({
    type: 'decrement',
    payload: decrementValue
})

export const initStopWatch = (bool) => ({
    type: 'start',
    payload: bool
})

export const setRunning = (boolean) => ({
    type: 'isRunning',
    payload: boolean
})

export const setIsStoped = (boolean) => ({
    type: 'set_stop',
    payload: boolean
})

export const resetMs = (value) => ({
    type: 'reset_ms',
    payload: value
})

export const incrementSeconds = (seconds) => ({
    type: 'increment_seconds',
    payload: seconds
})

export const resetSec = (value) => ({
    type: 'reset_sec',
    payload: value
})

export const incrementMinutes = (minutes) => ({
    type: 'increment_minutes',
    payload: minutes
})

export const resetMin = (value) => ({
    type: 'reset_min',
    payload: value
})

export const incrementHours = (hours) => ({
    type: 'increment_hour',
    payload: hours
});

export const resetHours = (value) => ({
    type: 'reset_hour',
    payload: value
})

const interval = (func) => ({
    type: 'interval',
    payload: func
})

export const setLaps = (lapInfo) => ({
    type: 'set_lap',
    payload: lapInfo
})

export const resetLaps = (arr) => ({
    type: 'reset_laps',
    payload: arr
})

export const setSecondsPercentage = (seconds) => ({
    type: 'set_seconds_percentage',
    payload: seconds
})

export const setMinutesPercentage = (minutes) => ({
    type: 'set_minutes_percentage',
    payload: minutes
})

export const setShow = (bool) => ({
    type: 'set_show',
    payload: bool
})

export const setTotal = (total) => ({
    type: 'set_total',
    payload: total
});

export const currentSecs = (current) => ({
    type: 'current_secs',
    payload: current
});

export const resetCurrent = (value) => ({
    type: 'reset_current',
    payload: value
})
export const timerPercentage = (percentage) => ({
    type: 'timer_percentage',
    payload: percentage
})

//Asyn thunk
export function incrementAsync(init, varr, timeInterval, isTimer) {
    return (dispatch) => {
        if (init) {
            if (!isTimer)
                dispatch(interval(setInterval(() => { dispatch(inc(1)) }, timeInterval)));
            else
                dispatch(interval(setInterval(() => { dispatch(incrementSeconds(-1)) }, timeInterval)));
        }
        else {
            clearInterval(varr);
        }
    };
}
