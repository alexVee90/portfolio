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

    let result = skills.map(item => {

        if(window.innerWidth < 421 && item.name === 'Javascript') {
            return <li ref={skillsBreakpoint} key={item.name}>
            <span className={`Skills-name ${props.animate ? 'animate-left' : ''}`}>
                {item.name}
            </span> 
            <RatingRow animate={props.animate} numberOfStars={item.stars} /></li>
        } else if(item.name === 'React' && window.innerWidth > 421) {
            return <li ref={skillsBreakpoint} key={item.name}>
                <span className={`Skills-name ${props.animate ? 'animate-left' : ''}`}>
                    {item.name}
                </span> 
                <RatingRow animate={props.animate} numberOfStars={item.stars} /></li>
        } else {
            return <li key={item.name}>
                <span className={`Skills-name ${props.animate ? 'animate-left' : ''}`}>
                    {item.name} 
                </span>
                <RatingRow animate={props.animate} numberOfStars={item.stars} /></li>
        }
    });

    return (
        <section className="Skills">
            <ul>
                {result}
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
        stars: 5
    },
    {
        name: 'Javascript',
        stars: 5
    },
    {
        name: 'React',
        stars: 5
    },
    {
        name: 'NodeJS',
        stars: 4
    },
    {
        name: 'Golang',
        stars: 3
    },
    {
        name: 'MongoDB',
        stars: 3
    },
    {
        name: 'SQL Databases',
        stars: 2
    },
];
