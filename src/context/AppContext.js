import React, { createContext, useReducer, useState } from 'react';


//See if you can find a story telling API ;) 7*-----


export const AppReducer = (state, action) => {

    //*-- We could have a switch here -- *//

    switch(action.type) {
        case 'CHANGE_THEME': //2*--

            console.log("Switching to: " + action.payload);
            state.currentTheme = action.payload;
            action.type = "DONE";
            return state;

        default:
            return {
                ...state,
            };

    }



    //OR WE CAN MANAGE THE STATE IN OTHER FORMS 3*--


// Reducer will preform actions like so: -- 'KRATOS_SHOUT_LOKI' -- , a bit confusing at first. 9*-----
//etc. etc. etc. etc. etc. 10*-----

}

const initialState = {
    //*This can be basically anything you want it to be.*//

    //Add all your component states here. It will make everything so much easier! 8*-----

    currentTheme: 'fullStackTheme',

};

export const AppContext = createContext();


// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const [cssValues, setCssValues] = useState({
        backgroundColor: 'red',
        fontSize: '16px',
        height: 'fit-content',
        width: 'fit-content',
        padding: '1rem',
        backgroundColor: 'antiquewhite',
      })
    
      const updateCssValues = (newValues) => {
        setCssValues((prevValues) => ({
          ...prevValues,
          ...newValues,
        }));
      };
    return (
        <AppContext.Provider
            value={{
                //* This can be basically anything as well*// 6*------ Don't forget this!
                dispatch,
                currentTheme: state.currentTheme,
                cssValues, 
                updateCssValues
            }}

        >
            {props.children}
        </AppContext.Provider>
    );
};
