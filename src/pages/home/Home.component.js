import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Home.style.scss';

import Landing from '../../containers/landing/Landing.component';
import Quote from '../../containers/quote/Quote.component';
import Skills from '../../containers/skills/Skills.component';
import CurrentRole from '../../containers/currentRole/CurrentRole.component';
import Projects from '../../containers/projects/Projects.component';
import Footer from '../../containers/footer/Footer.component';

import Modal from '../../components/modal/Modal.component';
import ModalContent from '../../components/modalContent/ModalContent.component';

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
                <ModalContent />
            </Modal>
            <Landing />
            <Quote animate={animateQuote} />
            <Skills animate={animateSkills} />
            <CurrentRole animate={animateCurrentRole}/>
            <Projects />
            <Footer animate={animateFooter} />
        </main>
    )
}

const mapStateToProps = state => ({
    modalState: state.modalReducer,
    windowState: state.windowReducer
});

export default connect(mapStateToProps)(Home);