import {SET_TITLE,UPDATE_TITLE} from '../actions/actionTypes';
import initialState from "./initialState.json"

const tripReducer=(state=initialState.trip,action)=>{
    switch(action.type){
        case SET_TITLE:
            return {...state,id:action.trip.id,title:action.trip.title}
        case UPDATE_TITLE:
            return {...state,title:action.trip.title}
        default:
            return state
    }
}
export default tripReducer;