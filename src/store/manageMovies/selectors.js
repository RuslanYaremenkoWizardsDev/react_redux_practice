import { createSelector } from 'reselect';

const getManageMoviesStore = (state) => state.manageMovies

export const getCreateFormState = createSelector(
    getManageMoviesStore,
    (manageMovies) => manageMovies.create
) 

export const getCreateFieldState = createSelector(
    getCreateFormState,
    (_state, { id }) => id,
    (create, id) => create[id]
) 