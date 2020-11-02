import { animalsActionTypes } from './animals.types';

export const searchAnimal = (name) => {
    return {
        type: animalsActionTypes.SEARCH_ANIMAL,
        payload: name
    }
};

export const addAnimal = (animal) => {
    return {
        type: animalsActionTypes.ADD_ANIMAL,
        payload: animal
    }
};

export const setHealthyAnimal = (id) => {
    return {
        type: animalsActionTypes.SET_HEALTHY,
        payload: id
    }
};
