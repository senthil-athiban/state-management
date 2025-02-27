import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 2
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: any) => state.counter.value;
export const selectIsEven = (state: any) => state.counter.value % 2 === 0;
export default counterSlice.reducer;