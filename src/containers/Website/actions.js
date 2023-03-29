import { PAGE, REGISTER } from "./constants";

//Changeing page on wbsite
export const setPage = (page) => ({
    type: PAGE,
    payload: page
});

export const fillRegister = (registerInputData) => ({
    type: REGISTER,
    payload: registerInputData
});