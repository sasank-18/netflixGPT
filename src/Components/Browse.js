import React, { useEffect } from 'react'
import Header from './Header'
import options from '../constants/movies'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../reduxStore/moviesSlice'
import useFetchMovieData from './hooks/useFetchMovieData'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

const Browse = () => {

    useFetchMovieData()
    const toggleResult = useSelector((state)=> state.gptSearch.toggleGptSearch)
   
  return (
    <div >
       <Header/>
    {toggleResult?  
    <GptSearch/>
    :
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    }
    
    
    </div>
  )

}

export default Browse