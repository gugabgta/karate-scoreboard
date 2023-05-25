import './TimerControls.css';
import { useState } from 'react';

const TimerControls = (props) => {
    const [isRunning, setIsRunning] = useState(false)

    const start = _ => {
        props.start()
        setIsRunning(true)
    }

    const stop = _ => {
        props.stop()
        setIsRunning(false)
    }

    const reset = _ => {
        props.reset()
        setIsRunning(false)
    }

    return (
        <div className="timer-controls">
            <button
                type="button"
                className='glow-green'
                style={isRunning ? {display: 'none'} : {display: 'block'}}
                onClick={start}> Start
            </button>
            <button
                type="button"
                className='glow-red'
                style={isRunning ? {display: 'block'} : {display: 'none'}}
                onClick={stop}> Stop
            </button>
            <button
                type="button"
                className='glow-orange'
                onClick={reset}> Reset
            </button>
        </div>
    )
}

export default TimerControls
