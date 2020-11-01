import { animalsActionTypes } from './animals.types';

export const searchAnimal = (name) => {
    return {
        type: animalsActionTypes.SEARCH_ANIMAL,
        payload: name
    }
};
