import server from "../../../classes/server";
import { 
    CHANGE_MODE, 
    MODE_GAME, 
    MODE_MAIN_MENU, 
    MODE_WEBSITE, 
    SET_USER,
} from "./constants";

const  initialModeState = {
    mode: MODE_WEBSITE,
}
// Change game state
export const changeMode = (state=initialModeState, action={}) => {
    switch (action.type) {
        case CHANGE_MODE:
            return Object.assign({}, state, { mode: action.payload })
        default:
            return state
    }
}

const initialUserData = {
    name: 'name',
    joined: 'now'

}
export const userData = (state = initialUserData, action={}) => {
    switch (action.type) {
        case SET_USER: return Object.assign({}, state, action.payload);
           
        default:
            return state;
    }
}