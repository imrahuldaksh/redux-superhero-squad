import { combineReducers } from "redux";
import characters from "./characters_reducer";
import heroes from "./hero_reducer";

const rootReducer = combineReducers({
    characters: characters,
    heroes: heroes
})

export default rootReducer;
// export default characters;