import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaruantReducer from "../Slices/RestaurantSlice";

const reducer = combineReducers({
    restaurant: restaruantReducer,
});

export const store = configureStore({
    reducer
})