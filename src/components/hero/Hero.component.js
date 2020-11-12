import React from 'react';

import './Hero.style.scss';

const Hero = props => {

    const {
        fadeIn = true,
        role = 'Frontend Developer',
        name = 'Alexandru Visan',
        firstBtn = 'Custom CV', 
        secondBtn = 'EuroPass CV',
        firstBtnSrc,
        secondBtnSrc
    } = props;

    return (    
        <article className="Hero">
            <h2 className={`Hero-role ${fadeIn ? 'fade-in' : 'fade-out'}`}>{role}</h2>
            <p className="Hero-name">{name}</p>
            <div className="Hero-btn-section">
                <a href={firstBtnSrc} className="btn" download>{firstBtn}</a>
                <a href={secondBtnSrc} className="btn" download>{secondBtn}</a>
            </div>
        </article>
    )
}

export default Hero;