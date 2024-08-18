import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

function useNowPlayingMovies() {
const dispatch = useDispatch();
const getNowPlaying = async () => {
const data=await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
const response=await data.json();
if(response){
  let results=response.results;
  dispatch(nowPlayingMovies(response.results)); 
}
}

useEffect(() => {
  getNowPlaying();
}, [])

}

export default useNowPlayingMovies

