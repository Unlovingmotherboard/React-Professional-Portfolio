import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Example_component = () => {
    const { dispatch, currentTheme, cssValues, updateCssValues } = useContext(AppContext);

    const changeTheme = (e) => {

        updateCssValues({ backgroundColor: 'blue' });

        console.log(currentTheme)
        dispatch({
            type: 'CHANGE_THEME',
            payload: e.target.value,
        });
        console.log(currentTheme)
    }

    return (
        <div style={cssValues}>

            <select onChange={changeTheme}>
                <option value="fullStackTheme">Full Stack Theme</option>
                <option value="personalTheme">Personal Theme</option>
            </select>
        </div>
    );
};

export default Example_component;