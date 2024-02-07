import { useEffect, useState } from "react";
import options from "../constants/movies"
import { useSelector } from "react-redux";

const VideoBackground = (props) => {
  
  const [trailer, setTrailer] = useState([]);
  const movie= useSelector((state)=>state.movies.moviesArr)


   const  fetchTrailer=async()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${props.trailer.id}/videos?language=en-US`, options)
      const json = await data.json();
      setTrailer(json.results)
   }  
   useEffect(()=>{
    
    fetchTrailer();
   },[])
    
   if(!trailer)  return ;
      
  const trailerarr= trailer.filter((arr)=>{
    return  arr.type === "Trailer";
  })
   
  
  const trialerid = trailerarr[0];

if(!trialerid)   return;
 
  return  (
    <div className="absolute -mt-28">
       <iframe 
         className="w-screen aspect-video "
         src={"https://www.youtube-nocookie.com/embed/" + trialerid.key +"?si=hDc_LH14KJ1oyRYk&amp;controls=0&amp;start=2&mute=1&autoplay=1&playlist=" 
         + trialerid.key
        + "&loop=1" }
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
       </iframe>
    </div>
  ) 
}

export default VideoBackground