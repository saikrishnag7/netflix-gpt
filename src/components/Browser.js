import React from 'react'
import Header from './Header'
import useNowPlaying from '../utils/hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTrendingMovies from '../utils/hooks/useTrendingMovies';
import useUpcomingMovies from '../utils/hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlaying();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  
  )
}

export default Browser