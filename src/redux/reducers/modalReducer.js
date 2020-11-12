import * as types from '../actions/types';

const initialState = {
    modalClasses: 'Modal'
}

export default ( state = initialState, action ) => {
    switch(action.type) {
        case types.MODALOPEN: 
            return {
                modalClasses: 'Modal topToBottom'
            };
        case types.MODALCLOSE:
            return {
                modalClasses: 'Modal bottomToTop'
            };
        default:
            return {
                ...state
            };
    }
};