import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext'; 


const CasualTheme = () => {

    const { fadeIn, setFadeIn } = useContext(AppContext);
    useEffect(() => { setFadeIn(true) }, [setFadeIn]);

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={"casualThemeCSSAni"}>
            <div className='casualThemeCSS'>
            
            </div>
        </CSSTransition>
    );
  };

export default CasualTheme;