import React from 'react'
import CurrentPlayingMovies from './CurrentPlayingMovies'
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies'
function SecondayContainer() {
  return (
    <div className='bg-black -my-10 absolute overflow-x-scroll'>
    
        <CurrentPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
     
        </div>
  )
}

export default SecondayContainer    