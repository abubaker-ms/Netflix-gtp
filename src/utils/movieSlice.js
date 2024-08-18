import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      nowPlayingMovies: [],
      nowPlayingMoviesKey:"",
    },
    reducers: {
        nowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        nowPlayingMoviesKey:(state,action)=>{
            state.nowPlayingMoviesKey=action.payload;
        }
    },
});

export const { nowPlayingMovies,nowPlayingMoviesKey } = movieSlice.actions;
export default movieSlice.reducer;

  