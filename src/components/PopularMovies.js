import React from 'react'
import { useEffect, useState } from 'react';
import MovieTiles from './MovieTiles';
import { API_OPTIONS } from '../utils/constants';
export default function PopularMovies() {
    const [popularMovies, setpopularMovies]=useState([]);
    const PopularMovie=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const data=await response.json();
      console.log(data,"dataNowPlaying");
      setpopularMovies(data.results);
    }
  
    useEffect(() => {
      
        PopularMovie();
          
      }, [])
  return (
    <div>
        <MovieTiles movies={popularMovies} title="Popular Movies"/>
    </div>
  )
}
