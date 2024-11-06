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
    },
        deleteNum: (state) => {
        state.value = state.value.slice(0, -1)
        }
    }
})

export const lockerReducer = lockerSlice.reducer;

export const {addNum,
deleteNum} = lockerSlice.actions