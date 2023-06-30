import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CasualTheme = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => { setFadeIn(true) }, []);

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={"casualThemeCSSAni"}>
            <div className='casualThemeCSS'>
            
            </div>
        </CSSTransition>
    );
  };

export default CasualTheme;