import { useDispatch } from "react-redux";
import { addNowUpcomingMovies } from "../movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

  const getNowUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch( addNowUpcomingMovies(json.results));
    





  };
  useEffect(() => {
    getNowUpcomingMovies();

  },[]);
 

}
export default useUpcomingMovies;