import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../DiningRoomSlicer/DiningRoomSlicer';
import colorIndexReducer from '../ColorIndex/ColorINdexSlicer';

const store = configureStore({
    reducer: {
        products: productReducer,
        colorIndex: colorIndexReducer,
    },
});

export default store;