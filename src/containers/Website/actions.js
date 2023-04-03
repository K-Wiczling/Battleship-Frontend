import { FORM_REQ, LOGIN_REQ, PAGE, REGISTER } from "./constants";

//Changeing page on wbsite
export const setPage = (page) => ({
    type: PAGE,
    payload: page
});

export const updateRegister = (registerInputData) => ({
    type: REGISTER,
    payload: registerInputData
});

export const updatRequirementsList = (req) => ({
    type: FORM_REQ,
    payload: req
})

export const updatLoginRequirements = (req) => ({
    type: LOGIN_REQ,
    payload: req
})
