import './Counter.css'

const Counter = (props) => {
    return (
        <div className="counter">
            <button onClick={props.sub}> - </button>
            <input
                disabled
                value={props.value}
                readOnly
                className={`glow-${props.color}`}
            />
            <button onClick={props.sum}> + </button>
        </div>
    )
}

export default Counter
