import React from 'react';

import './Projects.style.scss';

import solana from '../../images/solana.png';
import naturabisse from '../../images/naturabisse.png';


const Projects = () => {
    return (
        <section className="Projects">

            <h2 className="Projects-title">Some of my collaborations and projects:</h2>

            <ul className="Projects-showcase">
                <li className="showcase-item">
                    <a className="img-container">
                        <img src={solana} alt="solana"/>
                    </a>
                </li>
                <li className="showcase-item">
                    <a className="img-container">
                        <img src={naturabisse} alt="naturabisse"/>
                    </a>
                </li>
            </ul>

        </section>
    )
}

export default Projects;
