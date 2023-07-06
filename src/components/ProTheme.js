import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext';
import GithubLogo from "./logos/github-mark.png"
import LinkedinLogo from "./logos/LI-In-Bug.png"

const ProTheme = () => {
    const { fadeIn, setFadeIn } = useContext(AppContext);
    useEffect(() => { setFadeIn(true) }, [setFadeIn]);

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={'proThemeCSSAni'}>
            <div className='proThemeCSS'>

                <div className='proSummary'>
                    <div className='proTitle'>
                        <h1>Jose M. Hernandez, Full Stack Software Developer</h1>
                    </div>
                    <div className='proAboutMe'>
                        <p>About Me</p>
                    </div>
                </div>

                <div className='proProjects'>
                    <div>
                    <p>Projects</p> 
                    </div>
                </div>

                <div className='proContactMe'>
                    <p>Contact Me</p>
                </div>

                <div className='proLinksDiv'>
                    <img src={GithubLogo} alt='Github Logo' className='githubLogo' />
                    <img src={LinkedinLogo} alt='LinkedIn Logo' className='linkedInLogo' />
                </div>
            </div>
        </CSSTransition>
    );
};

export default ProTheme;