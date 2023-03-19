import React from 'react'
import { Navigate } from 'react-router-dom';
import {isLoaded,isEmpty} from 'react-redux-firebase';
import {useSelector} from 'react-redux';

const ProtectedRoute=({children})=> {
  const auth = useSelector(state=>state.firebase.auth)
  return (
    (isLoaded(auth) && (!isEmpty(auth))) ?
    (children):(<Navigate to='/'/> )
)

};
export default ProtectedRoute;