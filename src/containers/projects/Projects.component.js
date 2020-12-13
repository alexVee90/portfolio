import React from 'react';

import './Projects.style.scss';

import solana from '../../images/solana.png';
import naturabisse from '../../images/naturabisse.png';

import ShowcaseItem from '../../components/showcaseItem/ShowcaseItem.component'


const Projects = () => {
    return (
        <section className="Projects">

            <h2 className="Projects-title">Some of the projects I collaborated on</h2>
            <div className="container">
                <ShowcaseItem imgSource={solana} url="https://www.tiendasolana.com"/>
                <ShowcaseItem imgSource={naturabisse} url="https://www.naturabisse.com"/>
            </div>

        </section>
    )
}

export default Projects;

