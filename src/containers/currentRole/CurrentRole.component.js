import React, { createRef, useEffect } from 'react'; 
import { connect } from 'react-redux';

import './CurrentRole.style.scss';

import laptopImgSrc from '../../images/laptop.jpeg';

import * as windowActions from '../../redux/actions/windowActions';

import JobDescription from '../../components/jobDescription/JobDescription.component';

const CurrentRole = (props) => {

    const currentRoleBreakpoint = createRef();

    useEffect( () => {
        props.updateCurrentRoleDomElement(currentRoleBreakpoint.current);
    }, []);

    return (
        <section className="CurrentRole">
            
            <div className="CurrentRole-img-container">
                <img src={laptopImgSrc} alt="laptop"/>
            </div>

           <JobDescription animate={props.animate} ref={currentRoleBreakpoint} />
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCurrentRoleDomElement: (currentRoleDomElement) => dispatch(windowActions.updateCurrentRoleDomElement(currentRoleDomElement))
})

export default connect(null, mapDispatchToProps)(CurrentRole);
