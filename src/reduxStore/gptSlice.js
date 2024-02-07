import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState:{
        toggleGptSearch: false,
        toggleGptSearchButton_Click: false,
        GptMovieSearchByUser:null,
        GptMovieSearchResult:null,
    },
    reducers:{
        toggleGptSearchBar : (state)=>{
           state.toggleGptSearch= !state.toggleGptSearch
        },
        toggleGptSearchButtonClicked: (state, action)=>{
            state.toggleGptSearchButton_Click=action.payload;
        },
        addMoviesGptMovieName: (state, action)=>{
         state.GptMovieSearchByUser = action.payload;
        },
        addMoviesGptMovieArr: (state, action)=>{
         state.GptMovieSearchResult = action.payload;
        

    }

}
})

export const {toggleGptSearchBar,toggleGptSearchButtonClicked, addMoviesGptMovieName, addMoviesGptMovieArr} = gptSlice.actions;
export default gptSlice.reducer