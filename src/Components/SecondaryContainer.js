import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movie = useSelector((store)=>store.movies.moviesArr)

  return (
    <div className="-mt-48">
        <MovieList title= {'Trending'} movies= {movie}/>
        <MovieList title= {'popular'} movies= {movie}/>
        <MovieList title= {'Upcoming'} movies= {movie}/>
        <MovieList title= {'popular'} movies= {movie}/>
      

    </div>
  )
}

export default SecondaryContainer