import MovieList from './MovieList';
import { connect } from 'react-redux'
import { getMovies } from '../../store/movies/asyncActions'
import { getMoviesStoreList, getIsLoading } from '../../store/movies/selectors'

const mapStateToProps = (state) => ({
    movies: getMoviesStoreList(state),
    isLoading: getIsLoading(state)
})

const mapDispatchToProps = { getMovies }

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);