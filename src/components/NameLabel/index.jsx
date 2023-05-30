import './NameLabel.css'

const NameLabel = (props) => {
    return (
        <div className={`name-label glow-${props.color}`}>
            {props.name}
        </div>
    )
}

export default NameLabel
