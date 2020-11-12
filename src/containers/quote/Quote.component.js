import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as windowActions from '../../redux/actions/windowActions';

import './Quote.style.scss'

import imgSrc from '../../images/man-stars.png'

const Quote = (props) => {

    const quoteRef = useRef(null);
    const quoteBreakpoint = useRef(null);

    useEffect( () => {
        props.updateQuoteOffset(quoteRef.current.offsetTop);
        props.updateQuoteDomElement(quoteBreakpoint.current);
    }, []);

    return (
        <section ref={quoteRef} className="Quote">
            <div className="Quote-img-container">
                <img src={imgSrc} alt="man-sky" />
            </div>
            <article className={`Quote-txt ${props.animate ? 'fade-in' : ''}`}>
                <p>
                    <em>
                        "Don't dream about other people's lives, start doing the <span ref={quoteBreakpoint} id="quote-breakpoint">things</span> that make you want to live yours."
                    </em> 
                </p>
            </article>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    updateQuoteOffset: (offset) => dispatch(windowActions.updateQuoteOffset(offset)),
    updateQuoteDomElement: (quoteDomElement) => dispatch(windowActions.updateQuoteDomElement(quoteDomElement))
})

export default connect(null, mapDispatchToProps)(Quote);
