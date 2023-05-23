import { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from './components/Container';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Penalties from './components/Penalties';

function App() {

    const [aka_counter, setAkaCounter] = useState(0)
    const [ao_counter, setAoCounter] = useState(0)
    const [time, setTime] = useState(180)
    const [aka_penalties, setAkaPenalties] = useState(0)
    const [ao_penalties, setAoPenalties] = useState(0)
    let interval = useRef(null)
    let isRunning = useRef(false)

    const startTimer = () => {
        isRunning.current = true
        setTime((prevTime) => prevTime - 1)
    }

    useEffect(() => {
        if (isRunning.current) {
            interval.current = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        }
        return () => clearInterval(interval.current);
    }, [time]);

    const stopTimer = () => {
        isRunning.current = false
        clearInterval(interval.current)
    }

    const resetTimer = () => {
        clearInterval(interval.current)
        isRunning.current = false
        setTime(180)
    }

    return (
        <div className="App">
            <Container>
                <div className='score'>
                    <Counter
                        sum={() => setAkaCounter(aka_counter + 1)}
                        sub={() => setAkaCounter(aka_counter - 1)}
                        color="red"
                        value={aka_counter}
                    />
                    <Penalties
                        setFlag={(flag) => setAkaPenalties(aka_penalties ^ flag)}
                        flags={aka_penalties}
                    />
                </div>
                <Timer
                    start={() => startTimer(setTime)}
                    stop={() => stopTimer()}
                    reset={() => resetTimer()}
                    edit={() => setTime(2)}
                    value={time}
                />
                <div className='score'>
                    <Counter
                        sum={() => setAoCounter(ao_counter + 1)}
                        sub={() => setAoCounter(ao_counter - 1)}
                        color="blue"
                        value={ao_counter}
                    />
                    <Penalties
                        setFlag={(flag) => setAoPenalties(ao_penalties ^ flag)}
                        flags={ao_penalties}/>
                </div>
            </Container>
        </div>
    );
}

export default App;
