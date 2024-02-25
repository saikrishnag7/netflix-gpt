import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice(
    {
        name : "movies",
        initialState:{
            nowPlayingMovies : null,
            newTrailer : null,
            nowPopulorMovies : null,
            nowTrendingMovies : null,
            nowUpcomingMovies : null,
        },
        reducers :{
            addNowPlayingMovies : (state,action)=>{
                state.nowPlayingMovies = action.payload;

            },
            addNowPopulorMovies :(state,action) => {
                state.nowPopulorMovies = action.payload;

            },
            addNowTrendingMovies :(state,action) => {
                state.nowTrendingMovies = action.payload;

            },
            addNowUpcomingMovies :(state,action) => {
                state.nowUpcomingMovies = action.payload;

            },

            addTrailer : (state , action) =>{
                state.newTrailer = action.payload;
            },

        }

    }
)
export const {addNowPlayingMovies ,addTrailer ,addNowPopulorMovies,addNowTrendingMovies,addNowUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
