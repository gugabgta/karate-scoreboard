import './Counter.css'

const Counter = (props) => {
    const padValue = (value) => {
        return String(value).padStart(2, '0')
    }

    return (
        <div className="counter vertical">
            <button className={`glow-${props.color}`} onClick={props.sum}> + </button>
            <span className={`glow-${props.color}`}>{padValue(props.value)}</span>
            <button className={`glow-${props.color}`} onClick={props.sub}> - </button>
        </div>
    )
}

export default Counter
