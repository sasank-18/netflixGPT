import { createSlice } from "@reduxjs/toolkit";


const languageSlice = createSlice({
    name: 'lang',
    initialState: {
        lang:'en'
    },
    reducers:{
        languageChange: (state, action)=>{
            state.lang= action.payload
        }
    }
})

export const {languageChange} = languageSlice.actions;
export default languageSlice.reducer;