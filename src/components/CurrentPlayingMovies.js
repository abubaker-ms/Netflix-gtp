import React from 'react'
import { useEffect, useState } from 'react';
import MovieTiles from './MovieTiles';
import { API_OPTIONS } from '../utils/constants';
export default function CurrentPlayingMovies() {
    const [nowplayingmovies, setNowPlayingMovies]=useState([]);
    const nowPlayingMoviesTile=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const data=await response.json();
      console.log(data,"dataNowPlaying");
      setNowPlayingMovies(data.results);
    }
  
    useEffect(() => {
      
      nowPlayingMoviesTile();
          
      }, [])
  return (
    <div>
        <MovieTiles movies={nowplayingmovies} title="NowPlaying movies"/>
    </div>
  )
}
