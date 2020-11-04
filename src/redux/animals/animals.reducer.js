import { animalsActionTypes } from './animals.types';
import { setHealthyAnimal, updateAnimal, deleteAnimal } from './animals.utils';

const INITIAL_STATE = {
    animals: [],
    searchField: ''
} 

const animalsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case animalsActionTypes.SET_HEALTHY:
            return {
                ...state,
                animals: setHealthyAnimal(state.animals, action.payload)
            }
        case animalsActionTypes.SEARCH_ANIMAL:
            return {
                ...state,
                searchField: action.payload
            }
        case animalsActionTypes.ADD_ANIMAL:
            return {
                ...state,
                animals: [...state.animals, {...action.payload}]
            }
        case animalsActionTypes.UPDATE_ANIMAL:
            return {
                ...state,
                animals: updateAnimal(state.animals, action.payload)
            }
        case animalsActionTypes.DELETE_ANIMAL:
            return {
                ...state,
                animals: deleteAnimal(state.animals, action.payload)
            }
        case animalsActionTypes.ADD_ANIMALS_DATA:
            return {
                ...state,
                animals: action.payload
            }
        default:             
            return state;
    }
};

export default animalsReducer;
