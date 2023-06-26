import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

const ProTheme = () => {

    const { ProfessionalThemeCSS } = useContext(AppContext);

    return (
        <div style={ProfessionalThemeCSS}>Professional Theme</div>
    )
};

export default ProTheme;