import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="text-white relative ">
      <div className=' w-[100vw] h-[100vh] fixed -z-10 '>
      <div className=" absolute w-[100%] h-[100%]  bg-gradient-to-b from-black"></div>
             <img className='w-[100%] h-[100%]' src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
     </div>
    
     <GptSearchBar/>
     <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch;