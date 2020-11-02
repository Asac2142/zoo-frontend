import { createSelector } from 'reselect';

const selectInjuredAnimals = (state) => state.animals;
const selectSF = (state) => state.animals;

export const selectAllInjuredAnimals = createSelector(
    [selectInjuredAnimals], 
    (iAnimals) => iAnimals.animals.filter(animal => !animal.active)
);

export const selectSearchField = createSelector(
    [selectSF],
    (sf) => sf.searchField
);
