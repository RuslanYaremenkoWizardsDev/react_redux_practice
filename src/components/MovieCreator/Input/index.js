import Input from './Input';
import { connect } from 'react-redux'
import { changeField } from '../../../store/manageMovies/actions'
import { getCreateFieldState } from '../../../store/manageMovies/selectors'

const mapStateToProps = (state, props) => ({
    value: getCreateFieldState(state,props),
})

const mapDispatchToProps = { changeField }

export default connect(mapStateToProps, mapDispatchToProps)(Input);