import Movie from './Movie';
import { connect } from 'react-redux'
import { deleteItem } from '../../store/movies/asyncActions'
import { getMovieById } from '../../store/movies/selectors'

const mapStateToProps = (state, props) => ({
    movie: getMovieById(state, props)
})

const mapDispatchToProps = { deleteItem }

export default connect(mapStateToProps, mapDispatchToProps)(Movie);