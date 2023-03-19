import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import { ReactReduxFirebaseProvider,getFirebase } from "react-redux-firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { reduxFirestore, getFirestore } from "redux-firestore";
import "firebase/firestore";
import "firebase/compat/auth";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter } from "react-router-dom";
import {getStorage} from "firebase/storage"
import "firebase/compat/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBK-LhjC3_BqJz9aqVPwIgAnb5k_XA9WEQ",
  authDomain: "marvel-tour-managers.firebaseapp.com",
  projectId: "marvel-tour-managers",
  storageBucket: "marvel-tour-managers.appspot.com",
  messagingSenderId: "1003619757963",
  appId: "1:1003619757963:web:6666463ddeca1ac962098e"
};
export const app=firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const Storage=firebase.storage();
const root = ReactDOM.createRoot(document.getElementById("root"));
const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(
        { getFirebase, getFirestore },
        reduxFirestore(firebase)
      )
    )   
  )  
);
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
);
