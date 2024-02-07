import { movieImgURL } from "../constants/movies"

const MovieList = ({title,movies}) => {
    if(!movies) return;

  return (
    <div className="relative z-[60] ml-8 mr-8">
        <h1 className="text-white font-bold text-3xl mb-5">{title}</h1>

    <div className="flex overflow-x-scroll movies">
    <div className="text-white flex mb-6 ">
    {movies.map((movie, id)=>{
      return  (
        <>
        {movie.backdrop_path&&
          <img key ={id} className="w-80 mr-6" src={movieImgURL + movie.backdrop_path}/>
        }
        </>
      )
 
    })
    }
    </div>
    </div>
    </div>
  )
}

export default MovieList