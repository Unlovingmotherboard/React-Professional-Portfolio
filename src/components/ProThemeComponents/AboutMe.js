import React, { useEffect, useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../../context/AppContext'

const AboutMe = () => {
    const { nodeRef } = useContext(AppContext);
    const [aboutMeState, setAboutMeState] = useState(false);
    const [myParagraph, setMyParagraph] = useState(false);
    return (
        <CSSTransition in={aboutMeState} timeout={2000} classNames={'aboutMeAni'}>
            <div ref={nodeRef} className='proAboutMe' onClick={() => {
                if (!aboutMeState) {
                    setAboutMeState(true); 
                    setTimeout( () => {setMyParagraph(true)}, 400)
                }

            }}>
                <h1>About Me</h1>

                {myParagraph && <p>Hello! I am Jose. I am a Full Stack Software Developer
                    based in Greater Houston. I have a passion for technology and design and
                    combine the two to create unique and intuitive user experinces. I am currently
                    centered around creating UI in React but not limited to React or Javascript.
                    If you are search of a Full Stack Developer for your next project, a recruiter
                    seeking a professional to join your company, or an up-and-coming developer in need of
                    assistance, please feel free to shoot me an email or call in the contact me section.
                    Can't wait start colaborating!
                </p>}

                <div className='proAboutMeRevert' onClick={() => { 
                    setAboutMeState(false) 
                    setTimeout( () => {setMyParagraph(false)}, 100)
                    }}></div>
            </div>
        </CSSTransition>
    );
};

export default AboutMe;
