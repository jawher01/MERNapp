import { createStore, applyMiddleware,compose } from "redux"
import { rooteReducers } from "../reducers/index"
import thunk from "redux-thunk"
 const composeEnhanser= window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;


export const store = createStore( rooteReducers, composeEnhanser(applyMiddleware(thunk)))