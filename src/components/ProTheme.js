import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext';
import AboutMe from './ProThemeComponents/AboutMe';
import GithubLogo from "./logos/github-mark.png"
import LinkedinLogo from "./logos/LI-In-Bug.png"

const ProTheme = () => {
    const { fadeIn, setFadeIn } = useContext(AppContext);

    useEffect(() => { setFadeIn(true) });

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={'proThemeCSSAni'}>
            <div className='proThemeCSS'>

                <div>
                    <div className='proTitle'>
                        <div className='proTitleNameDiv'>
                            <h1 className='proTitleH1'>Jose M. <br></br> Hernandez</h1>
                        </div>
                        <div className='proTitleFullStackDiv'>
                            <h1 className='proTitleFullStack'>Full Stack <br></br> Software Developer
                                <div>
                                    <p className='randomCatFact'>Random Cat Fact!</p>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <AboutMe />
                </div>


                <div className='proProjects'>
                    <div>
                        <p className='projectsTitle'>Projects</p>
                    </div>
                </div>

                <div className='proContactMe'>
                    <p className='contactMeTitle'>Contact Me</p>
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