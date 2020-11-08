import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();


// Wraps the app and provides the dataLayer to all compponents of the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer, initialState}>
  {children}
  </StateProvider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);
