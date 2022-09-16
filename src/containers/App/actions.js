import { CHANGE_MODE } from "./constants";

//Change game state
export const changeModes = (mode) => ({
    type: CHANGE_MODE,
    payload: mode
});
