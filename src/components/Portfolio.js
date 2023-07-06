import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext'; 
import ProTheme from './ProTheme';
import CasualTheme from './CasualTheme';

const Portfolio = () => {

    const { themeTransition, setThemeTransition, setFadeIn, nodeRef } = useContext(AppContext);
    const [activeTheme, setActiveTheme] = useState('proTheme');
    const handleThemeSwitch = () => {
        setThemeTransition(true);
        setFadeIn(false);
        setTimeout(() => {setThemeTransition(false)}, 2500);
        setTimeout(() => { setActiveTheme(activeTheme === 'proTheme' ? 'casualTheme' : 'proTheme'); }, 3000)
    };
    return (
        <div> 
            <CSSTransition in={themeTransition} timeout={3000} classNames="themeTransitionDiv">
                <div ref={nodeRef} className='themeTransitionDiv' onClick={() => {handleThemeSwitch(); }}/>

 
            </CSSTransition>
            {activeTheme === 'proTheme' ? <ProTheme /> : <CasualTheme />}
        </div>
    );
   
  };

export default Portfolio;