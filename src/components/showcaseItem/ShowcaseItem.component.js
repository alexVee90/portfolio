import React from 'react';

import './ShowcaseItem.style.scss';

const ShowcaseItem = (props) => {
    return (
        <article className="Projects-showcase">
            <div className="showcase-item">
                <span className="img-container">
                    <img src={props.imgSource} alt="naturabisse"/>
                </span>
            </div>
        </article>
    )
}

export default ShowcaseItem;
