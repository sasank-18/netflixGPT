import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from './MovieList'
import ScreenLoader from './ScreenLoader'
import { toggleGptSearchButtonClicked } from '../reduxStore/gptSlice'

const GptMoviesSuggestions = () => {
    const dispatch = useDispatch()
    const Moviedata = useSelector((state)=> state.gptSearch.GptMovieSearchResult);
    const MovieNamedata = useSelector((state)=> state.gptSearch.GptMovieSearchByUser);
    const searchButtonClicked = useSelector((state)=> state.gptSearch.toggleGptSearchButton_Click);
    
    if(Moviedata){
         dispatch(toggleGptSearchButtonClicked(false))
    }

    let MovieName = [];
    if(MovieNamedata){
    MovieName= MovieNamedata.split(",")
    console.log(MovieName)
}
   
   
  return  searchButtonClicked? <ScreenLoader/> :
  (
     Moviedata ?
    <div className='bg-black pt-5 bg-opacity-50 m-5  '>
      {Moviedata.map((moviearr, index)=>{
       return <MovieList key = {index} title={MovieName[index]} movies={moviearr}/>
      })}
    </div>
    : null

  )
}

export default GptMoviesSuggestions