import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import NowPlayingTrailer from './NowPlayingTrailer';
import NowPlayingTitle from './NowPlayingTitle';
function Browse() {

useNowPlayingMovies();
const nowPlayingMovieId=useSelector(state=>state?.movie?.nowPlayingMovies[0]?.id);
const nowPlayingMovies=useSelector(state=>state?.movie?.nowPlayingMovies[0]);
const movieTitle=nowPlayingMovies?.original_title;
const movieOverview=nowPlayingMovies?.overview;
if(!nowPlayingMovieId){
  return null;
}
  return (
    <div>
          <NowPlayingTitle movieInfo={[movieTitle,movieOverview]}/>
          <NowPlayingTrailer id={nowPlayingMovieId}/>
    </div>

  )
}

export default Browse