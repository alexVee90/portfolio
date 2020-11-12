import * as types from '../actions/types';

const initialState = {
    quoteOffsetTop: 0,
    skillsDomElement: {},
    quoteDomElement: {},
    currentRoleDomElement: {},
    footerDomElement: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_QUOTE_OFFSET: 
            return {
                ...state,
                quoteOffsetTop: action.payload
            };
        case types.UPDATE_SKILLS_DOM_ELEMENT: 
            return {
                ...state,
                skillsDomElement: action.payload
            };
        case types.UPDATE_QUOTE_DOM_ELEMENT: 
            return {
                ...state,
                quoteDomElement: action.payload
            };
        case types.UPDATE_CURRENT_ROLE_DOM_ELEMENT:
            return {
                ...state, 
                currentRoleDomElement: action.payload
            };
        case types.UPDATE_FOOTER_DOM_ELEMENT: 
            return {
                ...state,
                footerDomElement: action.payload
            };
        default: 
            return {
                ...state
            }
    }
}