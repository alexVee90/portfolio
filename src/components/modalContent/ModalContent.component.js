import React, { useState } from 'react';

import './ModalContent.style.scss';

const ModalContent = () => {

    let [state, setState] = useState({ selected: false, selection: 'me'});

    const handleClick = e => {
        let valueToBeSet = e.target.innerHTML === 'About Me' ? 'me' : 'app';
        setState({ selected: true, selection: valueToBeSet });
    }

    const clearSelected = e => {
        setState( oldState => {
            return {
                ...oldState,
                selected: false,
                selection: oldState.selection
            }
        })
    }

    return (
        <section className="ModalContent">
            <ul className="ModalContent-navbar">
                <li onClick={handleClick} className={`${state.selected ? 'fade-left-out' : 'fade-left-in'}`}>
                   <a>About Me</a>
                </li>
                <li onClick={handleClick} className={`${state.selected ? 'fade-right-out' : 'fade-right-in'}`}>
                   <a>About this website</a>
                </li>
            </ul>

            <div className={`ModalContent-content ${state.selected ? 'fade-from-top' : 'fade-back-top'}`}>
                {content[state.selection]}
                <a className="return-btn" to="#" onClick={clearSelected}>Back</a>
            </div>
        </section>
    )
}

export default ModalContent;

const content = {
    me : <h2>Hi! My name is Alexandru Visan and I am a self-taught web developer. I really enjoy coding in react, but I also like working with nodeJS. I am also interested in learning other backend languages as well as learning new frontend frameworks. Check out more info <a rel="noreferrer nofollow" href="https://www.linkedin.com/in/alexandru-cristian-visan-5bab6a103" target="_blank">here</a>.</h2>,
    app: <h2>This Application has been created with React and vanilla JS. Other technologies like Redux, React Router, Sass have also been used (NO Jquery). Check out the source code <a rel="noreferrer nofollow" href="https://github.com/alexVee90/portfolio" target="_blank">here</a>.</h2>
}
