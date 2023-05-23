import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Counter from './components/Counter';

function App() {

    const [aka_counter, setAkaCounter] = useState(0)
    const [ao_counter, setAoCounter] = useState(0)

    return (
        <div className="App">
            <Container>
                <Counter
                    sum={() => setAkaCounter(aka_counter + 1)}
                    sub={() => setAkaCounter(aka_counter - 1)}
                    color="red"
                    value={aka_counter}
                    ></Counter>
                <Counter
                    sum={() => setAoCounter(ao_counter + 1)}
                    sub={() => setAoCounter(ao_counter - 1)}
                    color="blue"
                    value={ao_counter}
                ></Counter>
            </Container>
        </div>
    );
}

export default App;
