import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaruantReducer from "../Slices/RestaurantSlice";
import baketReducer from '../Slices/BasketSlice';

const reducer = combineReducers({
    restaurant: restaruantReducer,
    basket: baketReducer,
});

export const store = configureStore({
    reducer
})