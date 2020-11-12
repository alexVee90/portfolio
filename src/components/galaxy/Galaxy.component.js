import React from 'react';

import './Galaxy.style.scss';

import galaxyImg from '../../images/galaxy.png';

const Galaxy = props => {
    return (
        <div className="Galaxy">
            <img src={galaxyImg} alt="galaxy"/>
        </div>
    )
}

export default Galaxy;