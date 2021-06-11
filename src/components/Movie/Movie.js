import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie, deleteItem }) => {
    const handleDeleteItem = () =>{
        deleteItem(movie.id)
    }
    return (               
        <div className="card">
            <button onClick={handleDeleteItem}>X</button>
            <h5>{movie.title}</h5>
            <img src={movie.posterUrl}/>
        </div>
    )
}
Movie.propTypes = {
    movie: PropTypes.object,
}

Movie.defaultProps = {
    movies: {}
}

export default Movie