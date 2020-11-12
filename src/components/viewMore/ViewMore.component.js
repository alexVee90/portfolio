import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ViewMore.style.scss'

const ViewMore = ({ scrollToQuoteSection }) => {

    const handleClick = () => {
        scrollToQuoteSection();
    }

    return (
        <article onClick={handleClick} className="ViewMore">
            <span>View More</span>
            <FontAwesomeIcon className="ViewMore-icon" icon='angle-double-down' />
        </article>
    )
}

export default ViewMore;
