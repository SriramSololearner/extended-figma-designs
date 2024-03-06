import { configureStore } from '@reduxjs/toolkit';
import Slider from './reducers/slice';


export const Store = configureStore({
    reducer: {
        extended: Slider
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
