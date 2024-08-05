import { createSlice } from '@reduxjs/toolkit'

export const authReducer = createSlice({
    name: 'auth',
    initialState: { auth: false,
    role:false },
    reducers: {
        setAuth: (state, data) => {
            state.auth = data.auth
            state.role = data.role
        },
    },
})

export default authReducer.reducer