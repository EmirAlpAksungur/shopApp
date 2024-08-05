import { createSlice } from '@reduxjs/toolkit'

export const dataReducer = createSlice({
    name: 'data',
    initialState: {data:[]},
    reducers: {
        setData: (state, data) => {
            state.data = data.data
        },
    },
})

export default dataReducer.reducer