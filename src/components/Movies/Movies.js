import React from 'react';
import MovieFilters from '../MovieFilters'
import MovieList from '../MovieList'
import './movies.scss';

const Movies = () => (
    <main className="movies-wrapper">
        <MovieFilters/>
        <MovieList/>
    </main>
)

export default Movies