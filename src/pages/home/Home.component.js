import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Home.style.scss';

import Landing from '../../containers/landing/Landing.component';
import Quote from '../../containers/quote/Quote.component';
import Skills from '../../containers/skills/Skills.component';
import CurrentRole from '../../containers/currentRole/CurrentRole.component';
import Footer from '../../containers/footer/Footer.component';

import Modal from '../../components/modal/Modal.component';

import inView from '../../helpers/inView';

const Home = ({
        windowState: { skillsDomElement, quoteDomElement, currentRoleDomElement, footerDomElement },
        modalState: { modalClasses }
    }) => {

    let [animateSkills, toggleAnimateSkills] = useState(false);
    let [animateQuote, toggleAnimateQuote] = useState(false);
    let [animateCurrentRole, toggleAnimateCurrentRole] = useState(false);
    let [animateFooter, toggleAnimateFooter] = useState(false);


    useEffect( () => {        
        const handleScroll = e => {
            if(inView(skillsDomElement)) { 
                toggleAnimateSkills(true)
            }
            if(inView(quoteDomElement)) {
                toggleAnimateQuote(true)
            }
            if(inView(currentRoleDomElement)) {
                toggleAnimateCurrentRole(true)
            }
            if(inView(footerDomElement)) {
                toggleAnimateFooter(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [skillsDomElement])

    return(
        <main className="main">
            <Modal modalClasses={modalClasses}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores ut consequatur totam iste harum ipsa fugit repellendus, voluptates fuga placeat modi, aut odit molestias aliquam optio quam sed distinctio.</span>
            </Modal>
            <Landing />
            <Quote animate={animateQuote} />
            <Skills animate={animateSkills} />
            <CurrentRole animate={animateCurrentRole}/>
            <section style={{height: '80vh'}}></section>
            <Footer animate={animateFooter} />
        </main>
    )
}

const mapStateToProps = state => ({
    modalState: state.modalReducer,
    windowState: state.windowReducer
});

export default connect(mapStateToProps)(Home);