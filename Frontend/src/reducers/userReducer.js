import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'user',
    initialState: [{id:0,
    username:"pointo",
    password:"pointo",
    email:"pointo@gmail.com",
    role:true}],
    reducers: {
        addUser: (state, data) => {
            if(data.payload){
                state.push(data.payload[0])
            }
           
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = userReducer.actions

export default userReducer.reducer