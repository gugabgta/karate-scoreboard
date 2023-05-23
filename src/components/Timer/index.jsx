import './Timer.css'

function seconds(seconds) {
    const sec = `${String(seconds % 60).padStart(2, '0')}`
    return sec
}

function minutes(seconds) {
    const min = `${String(Math.floor(seconds / 60)).padStart(2, '0')}`
    return min
}

const Timer = (props) => {
    return (
        <div className="timer">
            <div className="timer-controls">
                <button type="button" onClick={props.start}> Start </button>
                <button type="button" className="" onClick={props.stop}> Stop </button>
                <button type="button" className="" onClick={props.reset}> Reset </button>
                <button type="button" className="" onClick={props.edit}> Edit </button>
            </div>
            <span className="glow">
                <span className="segment-font">{minutes(props.value)}</span>
                <span className="normal-font">:</span>
                <span className="segment-font">{seconds(props.value)}</span>
            </span>
        </div>
    )
}

export default Timer
