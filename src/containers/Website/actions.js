import { PAGE } from "./constants";

//Changeing page on wbsite
export const websitePage = (page) => ({
    type: PAGE,
    payload: page
});