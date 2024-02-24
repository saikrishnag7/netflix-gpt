import { useDispatch } from "react-redux";
import { addTrailer } from "../movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",API_OPTIONS )
        const json = await data.json();
        const trailerVideos = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerVideos === 0 ? json[0] : trailerVideos[0];
        dispatch(addTrailer(trailer));
    
        
        
      }
      useEffect(() =>{
        getMovieVideos();
    
      },[])

}
export default useMovieTrailer;