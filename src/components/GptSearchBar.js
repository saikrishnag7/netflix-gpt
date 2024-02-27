import React from 'react'
import { useRef } from 'react';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {

  const dispatch = useDispatch();
  const search = useRef(null);
  const searchMovieTmdb = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const gptSearch = (async() =>{
      const query = "Act as a Movie Recommendation system and suggest some movies for query" + search.current.value +". only give me names of 5 movies, comma separated like Example given ahead. Example Result:Don,Kick,Bahubali,RRR,GabbarSingh";
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",")
      const promiseArray = gptMovies.map((movies) => searchMovieTmdb(movies));
      const tmdbresults = await Promise.all(promiseArray);
      dispatch(addGptMovieResults({movieNames : gptMovies , movieResults : tmdbresults}));



  })


  return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center ">

       
          <form
            className="w-full md:w-1/2 bg-black grid grid-cols-12 " onSubmit ={(e) => e.preventDefault()}
          >
             
            <input
              ref = {search}
              type="text"
              className=" p-4 m-6 col-span-9"
              placeholder="What Would You Like To Watch Today ?"
            />
            <button
              className="col-span-3 m-6 py-2 px-4 bg-red-700 text-white rounded-lg"
              onClick ={gptSearch}
              
            >
            Search 
            </button>
          </form>
        </div>
      );
}

export default GptSearchBar