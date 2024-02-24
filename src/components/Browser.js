import React, {  } from 'react'
import Header from './Header'
import useNowPlaying from '../utils/hooks/useNowPlaying'
import MainContainer from './MainContainer';


const Browser = () => {

  useNowPlaying();

  return (
    <div>
     <Header/>
     <MainContainer/>

    </div>
  
  )
}

export default Browser