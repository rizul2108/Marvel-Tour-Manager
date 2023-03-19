import {ADD_SCHEDULE,UPDATE_SCHEDULE} from './actionTypes';

const addSchedule = (dayNo, actNo, task) => ({
    type: ADD_SCHEDULE,
    payload: { dayNo, actNo, task }
  });

export default addSchedule;