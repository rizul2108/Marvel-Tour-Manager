import {ADD_TRIP_DETAILS,UPDATE_TRIP_DETAILS} from './actionTypes';

export const add = (tripDetails)=>{
    return {type:ADD_TRIP_DETAILS,tripDetails:tripDetails}

}

export const update = (tripDetails)=>{
    return {type:UPDATE_TRIP_DETAILS,tripDetails:tripDetails}
}