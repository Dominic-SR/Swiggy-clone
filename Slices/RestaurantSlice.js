import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurant: { id: null,
            Image: null,
            name: null,
            rating: null,
            address: null,
            short_description: null,
            dishes: null,
            lat: null,
            long: null 
    }
}

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers:{
        setRestaurant:(state,action) => {
            state.restaurant = action.payload;
        }
    }
}) 

export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;