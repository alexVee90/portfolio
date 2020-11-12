import React, { useState } from 'react';

import './AboutIcon.style.scss'

const AboutIcon = ({ openModal, closeModal}) => {

    let [isXIcon, toggleXIcon] = useState(false);

    const handleClick = e => {
        e.preventDefault()
        if(isXIcon) {
            toggleXIcon(false);
            closeModal();
        } else {
            toggleXIcon(true);
            openModal();
        }
    }

    return (
        <a 
            href='#' 
            className={`AboutIcon ${isXIcon ? 'x-icon' : ''}`}
            onClick={handleClick}
        >
            <span className="AboutIcon-icon">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </span>
            <span className="AboutIcon-text">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
            </span>
        </a>
    )
}

export default AboutIcon;
