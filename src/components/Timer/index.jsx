import './Timer.css'

function seconds(seconds) {
    return `${String(seconds % 60).padStart(2, '0')}`
}

function minutes(seconds) {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}`
}

const Timer = (props) => {
    return (
        <div className="timer">
            <span className="glow">
                <span className="segment-font">{minutes(props.value)}</span>
                <span className="normal-font">:</span>
                <span className="segment-font">{seconds(props.value)}</span>
            </span>
        </div>
    )
}

export default Timer
