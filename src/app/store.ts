import {configureStore} from "@reduxjs/toolkit";
import {lockerReducer} from "../Locker/lockerSlice";

export const store = configureStore({
    reducer: {
        locker: lockerReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


