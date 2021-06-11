import MovieCreator from './MovieCreator'
import { connect } from 'react-redux'
import { createMovie } from '../../store/manageMovies/asyncActions'

const mapDispatchToProps = { createMovie }

export default connect(null, mapDispatchToProps)(MovieCreator);