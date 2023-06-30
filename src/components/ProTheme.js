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

                </div>
                
                <div className='proLinksDiv'>
                    <img src={GithubLogo} alt='Github Logo' className='githubLogo'/>
                    <img src={LinkedinLogo} alt='LinkedIn Logo' className='linkedInLogo'/>
                </div>

            </div>
        </CSSTransition>
    );
  };

export default ProTheme;