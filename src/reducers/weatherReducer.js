import {GET_WEATHERS_REQUEST} from "../actions/weatherActions.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case GET_WEATHERS_REQUEST:
            return { ...state, ...action.payload};
        default:
            return state;
    }
}