import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import CustomLoader from '../CustomLoader';

class MovieList extends Component{
    componentDidMount(){
        const { getMovies } = this.props
        getMovies()
    }
    render () {
        const { movies, isLoading } = this.props

        return (
            <div className="list">
                {isLoading
                    ? <CustomLoader/>
                    : null}
                {movies.map(movie=>(
                        <Movie id={movie.id} key={movie.id}/>
                    ))
                }
            </div>
        )
    }
} 
MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    getMovies: PropTypes.func.isRequired,
}

MovieList.defaultProps = {
    movies: []
}

export default MovieList