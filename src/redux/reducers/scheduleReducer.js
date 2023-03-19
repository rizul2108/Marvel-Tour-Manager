import initialState from './initialState.json';
import { ADD_SCHEDULE, UPDATE_SCHEDULE } from '../actions/actionTypes';

export default function scheduleReducer(state=initialState.schedule,action){
    switch(action.type)
    {
        case ADD_SCHEDULE:
            const { dayNo, actNo, task } = action.payload;
            const updatedDays = [...state.schedule];
            updatedDays[dayNo][actNo] = task;
            return {
              ...state,
              schedule: updatedDays
            };

      

        default:
            return state;
    }
}