import React from 'react';

import './Footer.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="Footer">
            <ul className="info-container">
                <li># : <a href="tel:+40">0766812794</a></li>
                <li>@ : <a href="mailto:">alexandrucristianvisan.com</a></li>
            </ul>
            
            <p>&copy; 2020 - Alex Visan</p>

            <div className="social">
                <a href="https://github.com" target="_blank" rel="noreferrer nofollow">
                    <FontAwesomeIcon icon={['fab', 'github']} size='3x' />
                </a>
                <a href="https://linkedin.com" target="blank" rel="noreferrer nofollow">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
