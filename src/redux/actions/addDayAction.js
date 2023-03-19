import {ADD_DAYS} from "./actionTypes";


const addDays = (days) => ({
    type: ADD_DAYS,
    payload: days
  });
  
export default addDays;