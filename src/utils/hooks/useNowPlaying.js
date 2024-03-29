import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";


const useNowPlaying = () =>{
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch( addNowPlayingMovies(json.results));
    





  };
  useEffect(() => {
    getNowPlayingMovies();

  },[]);
 

}
export default useNowPlaying;