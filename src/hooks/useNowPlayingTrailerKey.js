import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlayingMoviesKey } from "../utils/movieSlice";  
import { API_OPTIONS } from "../utils/constants";
function useNowPlayingTrailerKey(nowPlayingMovieId) {
    const dispatch = useDispatch();

    const nowPlayingVideo= async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${nowPlayingMovieId.id}/videos`, API_OPTIONS)
        const response=await data.json();
        if(response){
            let results=response.results;
            let filterTrailer=results.filter((result)=>result.type==="Trailer");
            let trailerVideo=filterTrailer?filterTrailer[0]:results[0];
            let trailerVideoKey=trailerVideo.key;
            dispatch(nowPlayingMoviesKey(trailerVideoKey));
            console.log(trailerVideo,"trailerVideo");
        }
      }

      useEffect(() => {
        nowPlayingVideo();
      }, [])

}

export default useNowPlayingTrailerKey