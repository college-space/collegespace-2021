import React, { useContext, useReducer } from 'react';

import {
  SET_HEADING,
  SET_TEAMDATA,
  SET_LOADING,
  SET_EXAMPAPERS,
} from './types';
import reducer from './reducer';

import data from '../meta/teamData';

const initialState = {
  heading: 'CollegeSpace',
  isLoading: false,
  teamData: data,
  examPapersData: null,
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

  const getExamPapers = async (branch) => {
    setLoading();
    const response = await fetch(
      `https://collegespace-backend-strapi.herokuapp.com/exampapers?branch=${branch}`
    );

    const examPapers = await response.json();
    if (examPapers.length > 0) {
      dispatch({ type: SET_EXAMPAPERS, payload: examPapers[0] });
    } else dispatch({ type: SET_EXAMPAPERS, payload: null });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setHeading,
        getTeamData,
        getExamPapers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
