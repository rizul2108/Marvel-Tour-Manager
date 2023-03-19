import {ADD_RESPONSIB,UPDATE_RESPONSIB} from './actionTypes';

export const add = (responsib)=>{
    return {type:ADD_RESPONSIB,responsib:responsib}

}

export const update = (responsib)=>{
    return {type:UPDATE_RESPONSIB,responsib:responsib}
}