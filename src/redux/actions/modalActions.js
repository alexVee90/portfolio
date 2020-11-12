import * as types from './types';

export const modalOpen = () => {
    return {
        type: types.MODALOPEN
    }
}

export const modalClose = () => {
    return {
        type: types.MODALCLOSE
    }
}