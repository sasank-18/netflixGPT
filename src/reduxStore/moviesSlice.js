import { createSlice } from "@reduxjs/toolkit";


const movies = createSlice({
    name : 'movies',
    initialState : {
       moviesArr: null
    },
    reducers :{
       addMovies : (state, action) =>{
         state.moviesArr = action.payload;
       }
    }
    }
)

export const {addMovies} = movies.actions;

export default movies.reducer;
