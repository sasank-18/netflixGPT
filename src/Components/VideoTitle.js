
const VideoTitle = ({trailer}) => {
  return (
    <div>
      <div className= "text-white z-[70] absolute top-52 left-14">
           <h1 className="text-5xl font-bold mb-4">{trailer.title}</h1>
           <p className="w-5/12 mb-0 text-gray-300">
           {trailer.overview}</p>
           <button className="text-white mt-4 mr-4 bg-white bg-opacity-30 border p-2 rounded-md font-bold px-4 text-xl">
           ▶ Play</button>
           <button className="text-white mt-4 bg-black bg-opacity-30 border p-2 rounded-md font-bold px-4 text-xl">
           More Info</button>
      </div>
      <div className="w-full absolute text-white top-0 bg-gradient-to-r from-black  h-[50rem] z-[60] "></div>
    </div>
  )
}

export default VideoTitle