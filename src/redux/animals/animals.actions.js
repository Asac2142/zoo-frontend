import { animalsActionTypes } from './animals.types';

export const addAnimalData = (animalsArray) => {
    return {
        type: animalsActionTypes.ADD_ANIMALS_DATA,
        payload: animalsArray
    };
};

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

export const updateAnimal = (animal) => {
    return {
        type: animalsActionTypes.UPDATE_ANIMAL,
        payload: animal
    }
};

export const deleteAnimal = (animal) => {
    return {
        type: animalsActionTypes.DELETE_ANIMAL,
        payload: animal
    }
};
