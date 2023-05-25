import { useState, useEffect, useRef } from 'react';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Penalties from './components/Penalties';
import TimerControls from './components/TimerControls';

function noLessThanZero(value) {
    return value <= 0 ? 0 : value
}

function App() {

    const [aka_counter, setAkaCounter] = useState(0)
    const [ao_counter, setAoCounter] = useState(0)
    const [time, setTime] = useState(180)
    const [aka_penalties, setAkaPenalties] = useState(0)
    const [ao_penalties, setAoPenalties] = useState(0)
    const [is_running, setIsRunning] = useState(false)
    let interval = useRef(null)

    const startTimer = () => {
        setIsRunning(true)
    }

    useEffect(() => {
        if (is_running) {
            interval.current = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        }
        return () => clearInterval(interval.current);
    }, [time, is_running]);

    const stopTimer = () => {
        setIsRunning(false)
        clearInterval(interval.current)
    }

    const reset = () => {
        clearInterval(interval.current)
        setAkaCounter(0)
        setAoCounter(0)
        setAkaPenalties(0)
        setAoPenalties(0)
        setTime(180)
        setIsRunning(false)
    }

    return (
        <div className="App">
            <div className="timer-controls">
                <TimerControls
                    start={startTimer}
                    stop={stopTimer}
                    reset={reset}
                />
            </div>
            <div className='container'>
                <div className='score'>
                    <Counter
                        sum={() => setAkaCounter(noLessThanZero(aka_counter + 1))}
                        sub={() => setAkaCounter(noLessThanZero(aka_counter - 1))}
                        color="red"
                        value={aka_counter}
                    />
                    <Penalties
                        setFlag={(flag) => setAkaPenalties(aka_penalties ^ flag)}
                        flags={aka_penalties}
                    />
                </div>
                <Timer value={time} />
                <div className='score'>
                    <Counter
                        sum={() => setAoCounter(noLessThanZero(ao_counter + 1))}
                        sub={() => setAoCounter(noLessThanZero(ao_counter - 1))}
                        color="blue"
                        value={ao_counter}
                    />
                    <Penalties
                        setFlag={(flag) => setAoPenalties(ao_penalties ^ flag)}
                        flags={ao_penalties}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
