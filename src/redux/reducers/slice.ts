import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Istate {
    data: any;
}

const initialState: Istate = {
    data: null,
}

export const Slider = createSlice({
    name: "extended",
    initialState,
    reducers: {},

})

export default Slider.reducer