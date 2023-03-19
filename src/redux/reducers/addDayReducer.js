import initialState from './initialState.json';
import {ADD_DAYS } from '../actions/actionTypes';

const addDayReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_DAYS:
        return {
          ...state,
          schedule: Array.from({ length: action.payload }, () => [])
        };
      default:
        return state;
    }
  };
  export default addDayReducer;