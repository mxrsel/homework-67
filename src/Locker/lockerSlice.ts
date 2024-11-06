import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LockerState {
    value: string;
    message: boolean | null
}

const initialState: LockerState = {
    value: '',
    message: null
}

const truePin = '2626';

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
        },

        checkout: (state, action: PayloadAction<string>) => {
           state.message = action.payload === truePin
        }
    }

})

export const lockerReducer = lockerSlice.reducer;

export const {addNum,
deleteNum,
checkout} = lockerSlice.actions