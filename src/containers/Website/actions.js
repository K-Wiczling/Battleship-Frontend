import { PAGE } from "./constants";

//Changeing page on wbsite
export const setPage = (page) => ({
    type: PAGE,
    payload: page
});