import { PAGE, REGISTER, HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE, FORM_REQ, LOGIN_REQ } from "./constants";

const initialPage = {
    page: HOME_PAGE,
}
// Change website page state
export const currentWebsitePage = (state = initialPage, action = {}) => {
    if(action.type === PAGE){
        return Object.assign({}, state, { page: action.payload })
    }
    return state;
}

const intialregisterData = {
        email: '',
        name: '',
        pass: '',
        passRepeat: '',
        reqs: []
}

// Change website page state
export const registerPage = (state = intialregisterData, action = {}) => {
    if(action.type === REGISTER){
        return Object.assign({}, state, { 
            email: action.payload.email,
            name: action.payload.name,
            pass: action.payload.pass,
            passRepeat: action.payload.passRepeat
         })
    }
    if(action.type === FORM_REQ){
        return Object.assign({}, state, { 
            reqs: action.payload
         })
    }
    return state;
}
