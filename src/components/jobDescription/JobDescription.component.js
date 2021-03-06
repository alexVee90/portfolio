import React, { forwardRef } from 'react';

import './JobDescription.style.scss';

const JobDescription = forwardRef( (props, ref) => {
    return (
        <article className={`job-description ${props.animate ? 'fade-jd-in' : ''}`}>

            <div className="open-tag">{'CurrentRole'}</div> 

                <div ref={ref} className='job-title'>
                    <span className="open-tag">JobTitle</span>
                        React Developer 
                    <span className="closing-tag">JobTitle</span>
                </div>

                <div className="company">
                    <span className="open-tag">Company</span>
                        Luxoft
                    <span className="closing-tag">Company</span>
                </div>
                
                <div className="tag-self-closing">
                    <span>input </span>{'type="checkbox" value="currentlyWorkingHere" checked'}
                </div> 

                <div className="description">
                    <span className="open-tag">Description</span>
                        Developing applications and new features using React.
                    <span className="closing-tag">Description</span>
                </div>
                
                <div className="open-tag technology-stack">{'TechnologyStack'}</div> 
                    
                    <div className="open-tag list-of-tech">{'ul'}</div> 
                        <span className="list-item-container">

                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Javascript
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                HTML & CSS
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Sass
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                React
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Redux
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Postman
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Git & Github & Gerrit
                            <span className="closing-tag">li</span>
                        </div>
                        <div className="list-item">
                            <span className="open-tag">li</span>
                                Jira & Slack & others
                            <span className="closing-tag">li</span>
                        </div>
                        </span>
                    
                    <div className="closing-tag list-of-tech">{'ul'}</div> 
                
                <div className="closing-tag technology-stack">{'TechnologyStack'}</div>    
                        
            <div className="closing-tag">{'CurrentRole'}</div>    

        </article>
    )
})

export default JobDescription;
