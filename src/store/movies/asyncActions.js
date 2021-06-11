import * as actions from './actions'

export const getMovies = () => async (dispatch) =>{
    try{
        dispatch(actions.getMoviesRequest());
        const data = await fetch('http://localhost:3001/movies')
        dispatch(actions.getMoviesSuccess(await data.json()));
    } catch(e){
        dispatch(actions.getMoviesError(e));
    }
} 

export const deleteItem = (id) => async (dispatch) =>{
    fetch(`http://localhost:3001/movies/${id}1`,{ method: "DELETE" })
        .then(() => {
            dispatch(actions.deleteMovieSuccess({ id }))
        })
} 