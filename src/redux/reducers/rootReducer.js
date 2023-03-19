import { combineReducers } from "redux";
import scheduleReducer from "./scheduleReducer";
import tripReducer from "./tripReducer";
import responsibReducer from "./responsibReducer";
import tripDtlReducer from "./tripDtlReducer"
import authReducer from "./authReducer";
import addDayReducer from "./addDayReducer";
import {firestoreReducer} from 'redux-firestore';
import * as actionTypes from "../actions/actionTypes";
import {firebaseReducer} from 'react-redux-firebase'
import initialState from "./initialState.json";
const appReducer = combineReducers({
  firestore: firestoreReducer,
  trip: tripReducer,
  schedule: scheduleReducer,
  responsib: responsibReducer,
  tripDetails:tripDtlReducer,
  auth:authReducer,
  firebase:firebaseReducer,
  addDay:addDayReducer
});
const rootReducer = (state = initialState, action) =>{ if(action.type===actionTypes.SIGN_OUT)
  {
      state=undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
