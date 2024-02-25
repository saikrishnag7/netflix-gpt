import { useDispatch } from "react-redux";
import { addNowPopulorMovies } from "../movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";


const usePopularMovies = () =>{
    const dispatch = useDispatch();

  const getNowPopulorMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch( addNowPopulorMovies(json.results));
    





  };
  useEffect(() => {
    getNowPopulorMovies();

  },[]);
 

}
export default usePopularMovies;