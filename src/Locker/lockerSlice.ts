import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LockerState {
    value: string;
}

const initialState: LockerState = {
    value: ''
}

const truePin = 2626;

const lockerSlice = createSlice({
    name: 'locker',
    initialState,
    reducers: {
    addNum: (state, action: PayloadAction<string>) => {
        if (state.value.length < 4) {
            state.value += action.payload
        }
    }
    }
})

export const lockerReducer = lockerSlice.reducer;

export const {addNum} = lockerSlice.actions