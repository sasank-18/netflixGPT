import { configureStore } from "@reduxjs/toolkit";
import authData from './signUp'
import moviesData from './moviesSlice'
import gptSearchToggle from './gptSlice'
import language from './languageSlice'
export  const store = configureStore({
    reducer:{
        UserAuthDAta: authData,
        movies :  moviesData,
        gptSearch:gptSearchToggle,
        lang:language
    }
})


