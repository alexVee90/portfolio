import { combineReducers } from 'redux';

import heroReducer from './heroReducer';
import modalReducer from './modalReducer';
import windowReducer from './windowReducer';


const rootReducer = combineReducers({
    heroReducer,
    modalReducer,
    windowReducer
});

export default rootReducer;
