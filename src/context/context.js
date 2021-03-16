import React, { useContext, useReducer } from 'react';

import { SET_HEADING, SET_TEAMDATA, SET_LOADING } from './types';
import reducer from './reducer';

import data from '../meta/teamData';

const initialState = {
  heading: 'CollegeSpace',
  isLoading: false,
  teamData: data,
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setHeading = (heading) => {
    dispatch({ type: SET_HEADING, payload: heading });
  };

  const getTeamData = () => {
    if (state.teamData !== null) return;
    setLoading();
    dispatch({ type: SET_TEAMDATA, payload: data });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setHeading,
        getTeamData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
