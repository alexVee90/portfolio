import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './Skills.style.scss';

import RatingRow from '../../components/ratingRow/RatingRow.component';

import * as windowActions from '../../redux/actions/windowActions';

const Skills = (props) => {

    const skillsBreakpoint = useRef(null);

    useEffect( () => {
       props.updateSkillsDomElement(skillsBreakpoint.current);
    }, []);

    return (
        <section className="Skills">
            
            <ul>
                {skills.map(item => {
                    return item.name === 'react'
                            ? (<li key={item.name}>
                                <span className={`Skills-name ${props.animate ? 'animate-left' : ''}`}>
                                    {item.name}
                                </span> 
                                <RatingRow animate={props.animate} numberOfStars={item.stars} /></li>)
                            :(<li ref={skillsBreakpoint} key={item.name}>
                                <span className={`Skills-name ${props.animate ? 'animate-left' : ''}`}>
                                    {item.name} 
                                </span>
                                <RatingRow animate={props.animate} numberOfStars={item.stars} /></li>)
                })}
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    updateSkillsDomElement: (skillsDomElement) => dispatch(windowActions.updateSkillsDomElement(skillsDomElement))
})

export default connect(null, mapDispatchToProps)(Skills);


const skills = [
    {
        name: 'HTML & CSS',
        stars: 4
    },
    {
        name: 'Javascript',
        stars: 4
    },
    {
        name: 'React',
        stars: 3
    },
    {
        name: 'NodeJS',
        stars: 3
    },
    {
        name: 'MongoDB',
        stars: 2
    }
];
