import initialState from './initialState.json';
import {ADD_TRIP_DETAILS,  UPDATE_TRIP_DETAILS} from '../actions/actionTypes';

export default function tripDtlReducer(state=initialState.tripDetails,action){
    switch(action.type)
    {
        case ADD_TRIP_DETAILS:
            return {...action.tripDetails}

        case UPDATE_TRIP_DETAILS:
            return {...action.tripDetails}

        default:
            return state;
    }
}