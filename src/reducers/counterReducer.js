const INITIAL_STATE = {
    ms: '00',
    seconds: '00',
    minutes: '00',
    hour: '00',
    start: false,
    isRunning: false,
    isStoped: false,
    interval: null,
    laps: [],
    secondsPercentage: 0,
    minutesPercentage: 0,
    showStopWatch: true,
    total: 0,
    current: 0,
    timerPercentage: 100
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'decrement':
            if (Number(state.ms) < 0) {
                return {
                    ...state,
                    ms: '99'
                }
            } else {
                if (Number(state.ms) < 10) {
                    return {
                        ...state,
                        ms: '0' + String(Number(state.ms) - action.payload)
                    }
                } else {
                    return {
                        ...state,
                        ms: String(Number(state.ms) - action.payload)
                    }
                }
            }

        case 'increment':
            if (Number(state.ms) < 9) {
                return {
                    ...state,
                    ms: '0' + String(Number(state.ms) + action.payload)
                }
            } else {
                return {
                    ...state,
                    ms: String(Number(state.ms) + action.payload)
                }

            }
        case 'reset_ms':
            return {
                ...state,
                ms: action.payload
            }
        case 'increment_seconds':
            if (Number(state.seconds) < 9) {
                return {
                    ...state,
                    seconds: '0' + String(Number(state.seconds) + action.payload)
                }
            } else {
                return {
                    ...state,
                    seconds: String(Number(state.seconds) + action.payload)
                }

            }
        case 'reset_sec':
            return {
                ...state,
                seconds: action.payload
            }

        case 'increment_minutes':
            if (Number(state.minutes) < 9) {
                return {
                    ...state,
                    minutes: '0' + String(Number(state.minutes) + action.payload)
                }
            } else {
                return {
                    ...state,
                    minutes: String(Number(state.minutes) + action.payload)
                }

            }
        case 'reset_min':
            return {
                ...state,
                minutes: action.payload
            }
        case 'increment_hour':
            if (Number(state.hour) < 9) {
                return {
                    ...state,
                    hour: '0' + String(Number(state.hour) + action.payload)
                }
            } else {
                return {
                    ...state,
                    hour: String(Number(state.hour) + action.payload)
                }

            }
        case 'reset_hour':
            return {
                ...state,
                hour: action.payload
            }
        case 'start':
            return {
                ...state,
                start: action.payload
            }
        case 'isRunning':
            return {
                ...state,
                isRunning: action.payload
            }
        case 'set_stop':
            return {
                ...state,
                isStoped: action.payload
            }
        case 'interval':
            return {
                ...state,
                interval: action.payload
            }
        case 'set_lap':
            return {
                ...state,
                laps: [...state.laps, action.payload]
            }
        case 'reset_laps':
            return {
                ...state,
                laps: action.payload
            }
        case 'set_seconds_percentage':
            return {
                ...state,
                secondsPercentage: action.payload * 100 / 60
            }
        case 'set_minutes_percentage':
            return {
                ...state,
                minutesPercentage: action.payload * 100 / 3600
            }
        case 'set_show':
            return {
                ...state,
                showStopWatch: action.payload
            }

        case 'set_total':
            return {
                ...state,
                total: action.payload
            }
        case 'current_secs':
            return {
                ...state,
                current: state.current + action.payload
            }
        case 'reset_current':
            return {
                ...state,
                current: action.payload
            }
        case 'timer_percentage':
            return {
                ...state,
                timerPercentage: action.payload
            }

        default:
            return state

    }
}


export default reducer;