import { applyMiddleware, createStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddle from 'redux-saga'

import rootReducer from "./rootReducer";
import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddle();


export const middlewares = [thunk, sagaMiddleware, logger ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store;