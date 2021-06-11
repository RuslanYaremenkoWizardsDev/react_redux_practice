import { combineReducers } from 'redux';
import { reducer as moviesReducer } from './movies/reducer';
import { reducer as manageMoviesReducer } from './manageMovies/reducer';

const rootReducer = combineReducers({ 
    movies: moviesReducer, //state.movies   ===>  {moviesIds: [], movies:[]}
    manageMovies: manageMoviesReducer //state.manageMovies.
})

export default rootReducer