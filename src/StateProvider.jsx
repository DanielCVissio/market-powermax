import{createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue=()=> useContext(StateContext);

// creamos Context Api  para pasar las variables de un componente a otro.