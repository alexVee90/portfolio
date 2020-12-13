import React from 'react';

import './ShowcaseItem.style.scss';

const ShowcaseItem = (props) => {
    return (
        <article className="Projects-showcase">
            <a href={props.url} target="_blank" className="showcase-item">
                <span className="img-container">
                    <img src={props.imgSource} alt="naturabisse"/>
                </span>
            </a>
        </article>
    )
}

export default ShowcaseItem;
