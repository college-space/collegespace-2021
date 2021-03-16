import {
  SET_HEADING,
  SET_TEAMDATA,
  SET_LOADING,
  SET_EXAMPAPERS,
} from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_HEADING:
      return { ...state, heading: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_TEAMDATA:
      return { ...state, teamData: action.payload, isLoading: false };
    case SET_EXAMPAPERS:
      return { ...state, examPapersData: action.payload, isLoading: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
