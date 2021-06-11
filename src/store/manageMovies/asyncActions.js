import { getMovies } from '../movies/asyncActions'
import { clearFields } from './actions'

export const createMovie = () => (dispatch, getState) => {
    const body = getState().manageMovies.create
    console.log(body)
    fetch(`http://localhost:3001/movies/`,{ method: "POST", body: JSON.stringify(body) })
        .then((data) => {
            console.log(data.json())
            dispatch(clearFields())
            dispatch(getMovies())
        })
}