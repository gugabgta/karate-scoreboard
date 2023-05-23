import './Penalties.css'

function Penalties(props) {

    const setFlag = (event) => {
        props.setFlag(event.target.value)
    }

    function isSet(flag) {
        return (props.flags & flag) === flag
    }

    return (
        <div className="penalties">
            <div className="row">
                <button onClick={setFlag} className={`${isSet(0x00000001) ? 'active' : ''}`} value={0x00000001}>W</button>
                <button onClick={setFlag} className={`${isSet(0x00000010) ? 'active' : ''}`} value={0x00000010}>K</button>
                <button onClick={setFlag} className={`${isSet(0x00000100) ? 'active' : ''}`} value={0x00000100}>HC</button>
                <button onClick={setFlag} className={`${isSet(0x00001000) ? 'active' : ''}`} value={0x00001000}>H</button>
            </div>
            <div className="row">
                <button onClick={setFlag} className={`${isSet(0x00010000) ? 'active' : ''}`} value={0x00010000}>W</button>
                <button onClick={setFlag} className={`${isSet(0x00100000) ? 'active' : ''}`} value={0x00100000}>K</button>
                <button onClick={setFlag} className={`${isSet(0x01000000) ? 'active' : ''}`} value={0x01000000}>HC</button>
                <button onClick={setFlag} className={`${isSet(0x10000000) ? 'active' : ''}`} value={0x10000000}>H</button>
            </div>
        </div>
    )
}

export default Penalties
