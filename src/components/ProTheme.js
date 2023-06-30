import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const ProTheme = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => { setFadeIn(true) }, []);

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={"proThemeCSSAni"}>
            <div className='proThemeCSS'>
            
            </div>
        </CSSTransition>
    );
  };



export default ProTheme;