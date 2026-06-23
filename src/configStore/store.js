import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src/index.js";

const initialState = {
    weatherInfo: {},
    message: 'Enter city name',
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));