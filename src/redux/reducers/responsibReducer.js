import initialState from './initialState.json';
import { ADD_RESPONSIB,UPDATE_RESPONSIB } from '../actions/actionTypes';

export default function responsibReducer(state=initialState.responsib,action){
    switch(action.type)
    {
        case ADD_RESPONSIB:
            return {...action.responsib}

        case UPDATE_RESPONSIB:
            return {...action.responsib}

        default:
            return state;
    }
}