import { CHANGE_MODE, MODE_SPLASH_SCREEN } from "./constants";

const  initialModeState = {
    mode: MODE_SPLASH_SCREEN
}
export const changeMode = (state=initialModeState, action={}) => {
    switch (action.type) {
        case CHANGE_MODE:
            return Object.assign({}, state, {mode: action.payload} )
        default:
            return state
    }
}