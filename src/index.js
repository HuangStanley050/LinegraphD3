import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { reduxFirestore, getFirestore, firestoreReducer } from "redux-firestore";
import { reactReduxFirebase, getFirebase, firebaseReducer } from "react-redux-firebase";
import firebaseconfig from "./config/firebase-config.js";
import thunk from "redux-thunk";
import selectionReducer from "./store/reducers/selection";
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    selection: selectionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

//change userProfile to null as no authenticaion is implemented yet
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseconfig),
        reactReduxFirebase(firebaseconfig, {
            userProfile: null,
            useFirestoreForProfile: true
        }))
);

const app = (
    <Provider store={store}>
    <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
