import { useSelector } from 'react-redux';
import  useNowPlayingTrailerKey from '../hooks/useNowPlayingTrailerKey';

function NowPlayingTrailer(nowPlayingMovieId) {

  useNowPlayingTrailerKey(nowPlayingMovieId);
  const nowPlayingKey=useSelector(state=>state?.movie?.nowPlayingMoviesKey)


  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video  top-0 left-0'
      src={"https://www.youtube.com/embed/"+nowPlayingKey+"?si=o7GIvVgRXj2z0XK6?&autoplay=1&mute=1"} 
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       >
      </iframe>   

    </div>
  )
}

export default NowPlayingTrailer