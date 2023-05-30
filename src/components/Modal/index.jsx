import './Modal.css'

const Modal = (props) => {
    return (
        <dialog id={props.id}>
            <form method="dialog">
                <div className="modal">
                    <div className="modal-content">
                        <h1>{props.title}</h1>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.on_close}>Close</button>
                        </div>
                    </div>
                </div>
            </form>
        </dialog>
    )
}

export default Modal
