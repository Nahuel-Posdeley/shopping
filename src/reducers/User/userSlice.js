import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: '',
    token: '',
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.fullName;
            state.token = action.payload.token;
        },
        unsetUser: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.token = '';
        }
    }
})

export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer