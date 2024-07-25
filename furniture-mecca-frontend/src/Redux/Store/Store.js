import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../DiningRoomSlicer/DiningRoomSlicer';

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

export default store;