import React, { useState, useContext } from 'react';

import { AppContext } from '../context/AppContext';

import ProTheme from './ProTheme';
import CasualTheme from './CasualTheme';

//import themes here

const Portfolio = () => {
    const [activeTheme, setActiveTheme] = useState('proTheme');
    const { ButtonCSS } = useContext(AppContext);

    const handleThemeSwitch = () => {
        setActiveTheme(activeTheme === 'proTheme' ? 'casualTheme' : 'proTheme')
    };

    return (
        <div>
            <div style={ButtonCSS} onClick={handleThemeSwitch}></div>
            {activeTheme === 'proTheme' ? <ProTheme /> : <CasualTheme />}
        </div>
    );
}

export default Portfolio;


//GONNA STOP HERE BUT WOULD IT MAKE MORE SENSE TO HAVE handleThemeSwitch IN APPCONTEXT AND USE DISPATCH TO CHANGE THEME?