import * as types from '../actions/types';

const initialState = {
    currentIndex: 0,
    fadeIn: true,
    roles: ['Frontend Developer', 'Backend Developer', 'Demandware Developer']
}

export default ( state = initialState, action ) => {
    switch(action.type) {
        case types.TOGGLEFADEIN: 
            return {
                ...state,
                fadeIn: !state.fadeIn
            };
        case types.REINITIALIZE:
            return {
                ...state,
                fadeIn: !state.fadeIn,
                currentIndex: 0
            };
        case types.INCREMENTINDEX: 
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                fadeIn: !state.fadeIn,
            }
        default: 
            return {
                ...state
            }
    }
}