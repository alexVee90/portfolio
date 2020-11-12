import React, { useState} from 'react';
import { connect } from 'react-redux';

import './Landing.style.scss';

import Galaxy from '../../components/galaxy/Galaxy.component';
import Hero from '../../components/hero/Hero.component';
import AboutIcon from '../../components/aboutIcon/AboutIcon.component'
import ViewMore from '../../components/viewMore/ViewMore.component';

import useInterval from '../../hooks/useInterval';

import * as heroActions from '../../redux/actions/heroActions';
import * as modalActions from '../../redux/actions/modalActions';

import firstBtnSrc from '../../pdf/AlexVisan-custom.pdf';
import secondBtnSrc from '../../pdf/AlexVisan-europass.pdf';

const Landing = ({ 
    runTextFadeInFadeOut, 
    heroState: { roles, currentIndex, fadeIn }, 
    windowState: { quoteOffsetTop },
    openModal, 
    closeModal }) => {

    useInterval(() => {
        runTextFadeInFadeOut();
    }, 1500);

    const scrollToQuoteSection = () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: quoteOffsetTop
        })
    }

    return(
        <section className="Landing">
            <AboutIcon openModal={openModal} closeModal={closeModal} />
            <Hero 
                role={roles[currentIndex]} 
                fadeIn={fadeIn}
                firstBtnSrc={firstBtnSrc}
                secondBtnSrc={secondBtnSrc}
            />
            <ViewMore scrollToQuoteSection={scrollToQuoteSection} />
            <Galaxy />
        </section>
    )
}

const mapStateToProps = state => ({
    heroState: state.heroReducer,
    windowState: state.windowReducer
});

const mapDispatchToProps = dispatch => ({
    runTextFadeInFadeOut: () => dispatch(heroActions.runTextFadeInFadeOut()),
    openModal: () => dispatch(modalActions.modalOpen()),
    closeModal: () => dispatch(modalActions.modalClose())
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);