import React from 'react';

import './RatingRow.style.scss';

import Star from '../star/Star.component';

const RatingRow = (props) => {

    let result = [];

    for(let i = 0; i < 5; i++) {
        let fullStar = true;
        
        if(i >=  props.numberOfStars) {
            fullStar = false
        }

        result.push(
            <Star 
                key={i} 
                animate={props.animate} 
                turn={`turn-${i + 1}`} 
                full={fullStar}
            />
        )

    }

    return (
        <span>
            {result}
        </span>
    )
}

export default RatingRow
