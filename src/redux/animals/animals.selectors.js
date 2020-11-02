import { createSelector } from 'reselect';

const selectAllAnimals = (state) => state.animals;
const selectSF = (state) => state.animals;

export const selectAllInjuredAnimals = createSelector(
    [selectAllAnimals], 
    (iAnimals) => iAnimals.animals.filter(animal => !animal.active)
);

export const selectSearchField = createSelector(
    [selectSF],
    (sf) => sf.searchField
);

export const selectAllHealthyAnimals = createSelector(
    [selectAllAnimals],
    (iAnimals) => iAnimals.animals.filter(animal => animal.active)
);
