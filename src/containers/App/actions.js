import { CHANGE_MODE } from "./constants";

export const changeMode = (mode) => ({
    type: CHANGE_MODE,
    payload: mode
});