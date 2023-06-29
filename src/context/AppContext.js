import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch(action.type) {
        case '': //2*--
            console.log("Switching to: " + action.payload);
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

    objectPropertyExample: "",

}; 

//*This can be basically anything you want it to be.*//
//Add all your component states here. It will make everything so much easier! 8*-----


export const AppContext = createContext();
// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components


export const AppProvider = (props) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    // 4. Sets up the app state. takes a reducer, and an initial state
    return (
        <AppContext.Provider value = { { dispatch, objectPropertyExample: state.objectPropertyExample, } }>
            {props.children}
        </AppContext.Provider>  //* This can be basically anything as well*// 6*------ Don't forget this!
    );
};
