export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const REMOVE_ALL_CHARACTER = 'REMOVE_ALL_CHARACTER';

export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id: id
    }
    return action;
}

export function removeCharacterById(id){
    const action = {
        type: REMOVE_CHARACTER,
        id: id
    }
    return action;
}

export function removeCharactersFromSquad(){
    const action = {
        type: REMOVE_ALL_CHARACTER
    }
    return action;
}