import { configureStore } from "@reduxjs/toolkit";
import authData from './signUp'


export  const store = configureStore({
    reducer:{
        UserAuthDAta: authData
    }
})


