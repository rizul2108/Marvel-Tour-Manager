import {SET_TITLE,UPDATE_TITLE} from "./actionTypes";
const {v4:uuidv4} = require('uuid');

export const setTitle=(title)=>{
    let id=uuidv4();
    return {type:SET_TITLE,trip:{title:title,id:id}}
}
export const updateTitle = (title)=>{
    return {type:UPDATE_TITLE,trip:{ title:title}}
}