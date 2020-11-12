import * as types from './types';

export const runTextFadeInFadeOut = () => (dispatch, getState) => {

    const heroState = getState().heroReducer;

    if(heroState.fadeIn) {

        dispatch({ type: types.TOGGLEFADEIN});

    } else {

        heroState.currentIndex >= 2 
            ? dispatch({ type: types.REINITIALIZE})
            : dispatch({type: types.INCREMENTINDEX});  

    }
}