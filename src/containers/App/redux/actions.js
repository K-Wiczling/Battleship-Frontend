import { 
    CHANGE_MODE, 
    SET_USER} from "./constants";

// Change game state
export const changeAppMode = (mode) => ({
    type: CHANGE_MODE,
    payload: mode
});


export const setLoggedUser = (user) => ({
    type: SET_USER,
    payload: user
});
