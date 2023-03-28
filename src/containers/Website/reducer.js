import { PAGE, HOME_PAGE } from "./constants";

const initialPage = {
    page: HOME_PAGE,
}
//Change website page state
export const websitePage = (state = initialPage, action = {}) => {
    switch (action.type) {
        case PAGE:
            return Object.assign({}, state, { page: action.payload })
        default:
            return state
    }
}