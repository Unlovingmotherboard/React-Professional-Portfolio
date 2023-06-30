import React, { createContext, useState, useRef } from 'react';

// export const AppReducer = (state, action) => {
//     switch(action.type) {
//         case '': //2*--
//             console.log("Switching to: " + action.payload);
//             return state;
//         default:
//             return {
//                 ...state,
//             };
//     }

//     //OR WE CAN MANAGE THE STATE IN OTHER FORMS 3*--
//     // Reducer will preform actions like so: -- 'KRATOS_SHOUT_LOKI' -- , a bit confusing at first. 9*-----
//     //etc. etc. etc. etc. etc. 10*-----
// }
// const initialState = {

//         proThemeState: false,
//         casualThemeState: false,
//         themeTransitionDiv: false,

//     /*

//          - proTheme state will load initially false and right away be set to true (to trigger CSSTransition animations)

//          - When user clicks on themeTransitionDiv proThemeState will be set to false 
//             in order to trigger the exit CSSTransition animations

//          - Vice versa for CasualTheme.js

//          - state for themeTransitionDiv initial state will be false

//      */

// }; 
//*This can be basically anything you want it to be.*//
//Add all your component states here. It will make everything so much easier! 8*-----

export const AppContext = createContext();
// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components


export const AppProvider = (props) => { 
    // const [state, dispatch] = useReducer(AppReducer, initialState); 

    const [themeTransition, setThemeTransition] = useState(false); 

    const [fadeIn, setFadeIn] = useState(false);

    const nodeRef = useRef(null);


    // 4. Sets up the app state. takes a reducer, and an initial state
    return (
        <AppContext.Provider value = { { 
            // dispatch, 
            themeTransition, setThemeTransition,
            fadeIn, setFadeIn,
            nodeRef,
            } }>


            {props.children}
        </AppContext.Provider>  //* This can be basically anything as well*// 6*------ Don't forget this!
    );
};
