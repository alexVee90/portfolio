import * as types from './types';

export const modalOpen = () => {
    document.body.style.overflow = "hidden"
    return {
        type: types.MODALOPEN
    }
}

export const modalClose = () => {
    document.body.style.overflow = "visible"
    return {
        type: types.MODALCLOSE
    }
}