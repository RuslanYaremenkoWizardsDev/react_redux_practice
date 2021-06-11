import * as AT from './actionTypes';

export const changeField = (payload) => ({
    type: AT.CHANGE_FIELD_CREATE,
    payload
})

export const clearFields = (payload) => ({
    type: AT.CLEAR_FILEDS,
    payload
})