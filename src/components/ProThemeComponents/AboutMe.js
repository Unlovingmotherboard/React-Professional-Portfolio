import React, { useEffect, useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../../context/AppContext'

const AboutMe = () => {
    const { nodeRef } = useContext(AppContext);
    const [aboutMeState, setAboutMeState] = useState(false);
    const [myParagraph, setMyParagraph] = useState(false);

    return (
        <CSSTransition in={aboutMeState} timeout={5000} classNames={'aboutMeAnimation'}>
            <div ref={nodeRef} className='proAboutMe' onClick={() => {
                if (!aboutMeState) {
                    setAboutMeState(true);
                    setTimeout(() => { setMyParagraph(true) }, 2500);
                }
            }}>

                <p className='aboutMePTag'>About Me</p>

                <p className='aboutMeParagraph'>Hello! I am Jose. I am a Full Stack Software Developer
                    based in Greater Houston. I have a passion for technology and design and
                    combine the two to create unique and intuitive user experinces. I am currently
                    centered around creating UI in React but not limited to React or Javascript.
                    If you are search of a Full Stack Developer for your next project, a recruiter
                    seeking a professional to join your company, or an up-and-coming developer in need of
                    assistance, please feel free to shoot me an email or call in the contact me section.
                    Can't wait start colaborating!</p>

                <div className='proAboutMeRevert' onClick={() => {
                    setAboutMeState(false);
                    setMyParagraph(false);
                }}></div>
            </div>
        </CSSTransition>
    );
};

export default AboutMe;


// user clicks on About me DIV -- DONE 
// Idealy i would like the <p> tag to load in -- This has to be thought more thouroughly
// proAboutMe animations trigger -- DONE
// I want the <h1> to fade out first -- 1000ms  -- DONE
// THEN 
// The div enlarges --2000ms
// THEN
// <p> loads (the load in can be hidden with a callback function after 2000ms) in and fades in - 1000ms
//The last animation will also give the <p> it's padding etc.