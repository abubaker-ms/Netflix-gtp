import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useState } from 'react';
function MovieTiles({movies,title}) {

  let nowplayingmovies=movies;
  let titleName=title;
  // const [nowplayingmovies, setNowPlayingMovies]=useState([]);
  // const nowPlayingMoviesTile=async()=>{
  //   const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
  //   const data=await response.json();
  //   console.log(data,"dataNowPlaying");
  //   setNowPlayingMovies(data.results);
  // }

  // useEffect(() => {
    
  //   nowPlayingMoviesTile();
  //   // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  //   //   .then(response => response.json())
      
  //   //   .then(response => console.log(response))
  //   //   .catch(err => console.error(err));
        
  //   }, [])
  
  return (
    
    <div>
            <h1 className='text-white text-2xl font-bold px-10 py-2 '>{title}</h1>

      <div className='flex  bg-gradient-to-r from-black mx-10 '>
        <div className='flex px-2 '>
      {nowplayingmovies.map((movie,key=movie.id)=>(
          <img className='mx-2 w-40 ' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      ))}
      </div>
      </div>
    </div>
  )
}

export default MovieTiles