import { useEffect } from "react";
import { addMovies } from "../../reduxStore/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import options from "../../constants/movies";


const useFetchMovieData = () => {
    const dispatch = useDispatch();
    const movie= useSelector((state)=>state.movies.moviesArr)
    const fetchMoviesData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        console.log(data)
         const json = await data.json();
        dispatch(addMovies(json.results))
      }
    
      useEffect(()=>{

       !movie && fetchMoviesData()
      },[])
 
}

export default useFetchMovieData



