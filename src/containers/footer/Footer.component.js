import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './Footer.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as windowActions from '../../redux/actions/windowActions';

const Footer = (props) => {

    const footerBreakpoint = useRef(null);

    useEffect( () => {
        props.updateFooterDomElement(footerBreakpoint.current)
    }, [])


    return (
        <footer className={`Footer ${props.animate ? 'fade-footer-in' : ''}`}>
            <ul className="info-container">
                <li># : <a href="tel:+40766812794">0766812794</a></li>
                <li>@ : <a href="mailto:alexandrucristianvisan.com">alexandrucristianvisan.com</a></li>
            </ul>
            
            <p ref={footerBreakpoint}>&copy; 2020 - Alex Visan</p>

            <div className="social">
                <a href="https://github.com/alexVee90" target="_blank" rel="noreferrer nofollow">
                    <FontAwesomeIcon icon={['fab', 'github']} size='3x' />
                </a>
                <a href="https://www.linkedin.com/in/alexandru-cristian-visan-5bab6a103" target="blank" rel="noreferrer nofollow">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' />
                </a>
            </div>
        </footer>
    )
}

const mapDispatchToProps = dispatch => ({
    updateFooterDomElement: (footerDomElement) => dispatch(windowActions.updateFooterDomElement(footerDomElement))
})

export default connect(null, mapDispatchToProps)(Footer);
