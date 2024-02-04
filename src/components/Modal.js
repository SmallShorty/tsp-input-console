import './Modal.css';


export const Modal = ({active, setActive}) => {

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modal__content active" : "modal__content"}>
                <p>
                    Enter fullscreen mode for a better viewing experience by pressing {' '}
                    <span className="Key">F11</span> key.
                </p>
                <button className="modal__confirm" onClick={() => setActive(false)}>
                    Okay
                </button>
            </div>
        </div>
    )
}