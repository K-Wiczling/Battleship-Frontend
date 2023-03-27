import { LOGIN_INTERACTION, REGISTER_INTERACTION, SET_INTERACTION } from "./constants";

const initialInteraction = {
    interacton: none,
}
//Change game state
export const setInteraction = (state = initialInteraction, action = {}) => {
    switch (action.type) {
        case SET_INTERACTION:
            return Object.assign({}, state, { interacton: action.payload })
        default:
            return state
    }
}