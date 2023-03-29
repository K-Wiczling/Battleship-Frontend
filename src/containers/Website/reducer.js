import { PAGE, REGISTER, HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "./constants";

const initialPage = {
    page: HOME_PAGE,
}
//Change website page state
export const websitePage = (state = initialPage, action = {}) => {
    if(action.type === PAGE){
        return Object.assign({}, state, { page: action.payload })
    }
    return state;
}

//Change website page state
export const registerPage = (state = initialPage, action = {}) => {
    if(action.type === REGISTER){
        return Object.assign({}, state, { registerInputData: action.payload })
    }
    return state;
}