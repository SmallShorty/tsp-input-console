import './Modal.css';

export const Modal = ({active, setActive}) => {

    const closeModal = () => {
        console.log('changed');
        setActive(false);
    }

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal__content">
                <p>
                    Enter fullscreen mode for a better viewing experience by pressing {' '}
                    <span className="Key">F11</span> key.
                </p>
                <button className="modal__confirm" onClick={closeModal}>
                    Okay
                </button>
            </div>
        </div>
    )
}