import React from 'react';

import './Modal.style.scss';

const Modal = ({ modalClasses, children }) => {

    return (
        <div className={modalClasses}>
            {children}
        </div>
    )
}

export default Modal;
