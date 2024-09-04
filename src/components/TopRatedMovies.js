import React from 'react'
import { useEffect, useState } from 'react';
import MovieTiles from './MovieTiles';
import { API_OPTIONS } from '../utils/constants';
export default function TopRatedMovies() {
    const [TopRated, setTopRatedMovie]=useState([]);
    const TopRatedMovie=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const data=await response.json();
      console.log(data,"dataNowPlaying");
      setTopRatedMovie(data.results);
    }
  
    useEffect(() => {
      
        TopRatedMovie();
          
      }, [])
  return (
    <div>
        <MovieTiles movies={TopRated} title="TopRatedMovie"/>
    </div>
  )
}
