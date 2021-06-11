import * as AT from './actionTypes';

const initialState = {
    create: {},
    update: {}
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case AT.CHANGE_FIELD_CREATE:
            return{
                ...state,
                create: {
                    ...state.create,
                    ...action.payload
                }
            }
        case AT.CLEAR_FILEDS:
            return{
                ...state,
                create: {}
            }
        default:
            return state;
    }
}