import * as types from './types';

// export const scrollToQuoteSection = (offset) => {
//     return {
//         type: types.SCROLLTOQUOTESECTION,
//         payload: offset
//     }
// }

export const updateQuoteOffset = offset => {
    return {
        type: types.UPDATE_QUOTE_OFFSET,
        payload: offset
    }
}

export const updateSkillsDomElement = skillsDomElement => {
    return {
        type: types.UPDATE_SKILLS_DOM_ELEMENT,
        payload: skillsDomElement
    }
}

export const updateQuoteDomElement = quoteDomElemend => {
    return {
        type: types.UPDATE_QUOTE_DOM_ELEMENT,
        payload: quoteDomElemend
    }
}

export const updateCurrentRoleDomElement = currentRoleElement => {
    return {
        type: types.UPDATE_CURRENT_ROLE_DOM_ELEMENT,
        payload: currentRoleElement
    }
}