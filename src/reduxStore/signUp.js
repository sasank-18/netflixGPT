import { createSlice } from "@reduxjs/toolkit";


const SignUpSignInSlice= createSlice({
    name: "UserAuthDAta",
    initialState: null,
    reducers:{
        addUser: (state, action)=>{
         return action.payload
        },
        removeUser: (state, action)=>{
            return null;
        }
    }

})


export const {addUser, removeUser} = SignUpSignInSlice.actions;
export default SignUpSignInSlice.reducer;






