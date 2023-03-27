import { SET_INTERACTION } from "./constants";

//Change game state
export const websiteInteraction = (interaction) => ({
    type: SET_INTERACTION,
    payload: interaction
});