import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataRegistration: [],
}
export const userRegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistration: (state,action) => {
           state.dataRegistration = [...state.dataRegistration, action.payload]
        },
    }
})

export const { setRegistration } = userRegistrationSlice.actions

export default userRegistrationSlice.reducer