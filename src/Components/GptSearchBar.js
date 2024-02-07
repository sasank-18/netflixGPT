import { useDispatch, useSelector } from "react-redux"
import language from "../constants/language"
import options, { openai } from "../constants/movies";
import { useRef } from "react";
import { addMoviesGptMovieArr, addMoviesGptMovieName, toggleGptSearchButtonClicked } from "../reduxStore/gptSlice";
import ScreenLoader from "./ScreenLoader";

const GptSearchBar = () => {
   const dispatch = useDispatch();

    const selectedLang = useSelector((store)=> store.lang.lang)
    const Moviedata = useSelector((state)=> state.gptSearch.GptMovieSearchResult)
    
 

    const gptInput = useRef(null);

     const FetchMovieBasedOnSearch= async(movie)=>{
       const data = await fetch(`https://api.themoviedb.org/3/search/movie?query= ${movie}`,options)
       const json = await data.json();
       console.log(json);
      return json.results;
      
    }

    const handleSearchButton = async()=>{  
      if(!gptInput.current.value) return;
      dispatch(toggleGptSearchButtonClicked(true));
      const content = 'act as a movie recommendation system and suggest 5 movies' + gptInput.current.value + 'only give movie name with comma seperated. For Example :- Sanam teri Kasam, Raaz, Doom, War '
       console.log(content)
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: content}],
        model: 'gpt-3.5-turbo',
      });

      dispatch(addMoviesGptMovieName(chatCompletion.choices[0].message.content))
      
      const gptMovie= chatCompletion.choices[0].message.content.split(",");
      const movieDataPromise=  gptMovie.map((movie)=>{
        return FetchMovieBasedOnSearch(movie);
      })

      const tmdbResults= await Promise.all(movieDataPromise)
      console.log(tmdbResults);
      dispatch(addMoviesGptMovieArr(tmdbResults));
    }
      


    

    
  return (
      <div className="pt-20 flex justify-center   ">
        <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className="bg-black border rounded-md w-5/12 grid grid-cols-12">
        <input  ref={gptInput} className="text-white rounded-l-sm  bg-slate-800  outline-none p-4 m-2 col-span-9" 
        type="text" 
        placeholder= {language[selectedLang].placeholder}/>

        <button
          onClick={handleSearchButton}
         className="rounded-r-md font-bold text-2xl col-span-3 py-2 px-4 bg-red-500 bg-opacity-60 text-white ">
         {language[selectedLang].search}
         </button>
     </form>
     </div>
  )
}

export default GptSearchBar