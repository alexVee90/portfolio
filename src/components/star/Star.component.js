import React from 'react';

import './Star.style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Star = (props) => {
    return (
        <FontAwesomeIcon 
            className={`Star ${props.animate ? props.turn : ''}`} 
            icon={ props.full ? ['fas', 'star'] : ['far', 'star']}
        ></FontAwesomeIcon>
    )
}

export default Star;
