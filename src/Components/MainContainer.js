import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    //useSelector is subscribing ;
  const movies=  useSelector((store)=> store.movies.moviesArr);
  
  if(!movies) return null;

  const id=  Math.floor(Math.random()*19)
  const forTrailer = movies[id];

  return (
    <div className="text-white w-[100vw] h-[100vh]" >
      <VideoTitle trailer = {forTrailer} />
      <VideoBackground trailer= {forTrailer} />
    </div>
  )
}

export default MainContainer