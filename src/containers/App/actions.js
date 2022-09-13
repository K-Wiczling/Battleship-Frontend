import { CHANGE_MODE } from "./constants";

export const changeModes = (mode) => ({
    type: CHANGE_MODE,
    payload: mode
});
