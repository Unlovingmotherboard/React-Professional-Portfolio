import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import ProTheme from './ProTheme';
import CasualTheme from './CasualTheme';

const Portfolio = () => {
    const [activeTheme, setActiveTheme] = useState('proTheme');

    const [themeTransition, setThemeTransition] = useState(false); 

    const nodeRef = useRef(null);

    const handleThemeSwitch = () => {
        setThemeTransition(true);
        setTimeout(() => {setThemeTransition(false)}, 2500);
        setTimeout(() => {
            setActiveTheme(activeTheme === 'proTheme' ? 'casualTheme' : 'proTheme');
        }, 3000)
    };

    return (
        <div> 
            <CSSTransition nodeRef={nodeRef} in={themeTransition} timeout={3000} classNames="themeButton">
                <div ref={nodeRef} className='themeButton' onClick={() => {handleThemeSwitch(); }}/>
            </CSSTransition>
            {activeTheme === 'proTheme' ? <ProTheme /> : <CasualTheme />}
        </div>
    );
}

export default Portfolio;