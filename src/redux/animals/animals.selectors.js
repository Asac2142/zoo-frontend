import { createSelector } from 'reselect';

const selectInjuredAnimals = state => state.animals;

export const selectAllInjuredAnimals = createSelector(
    [selectInjuredAnimals], 
    iAnimals => iAnimals.animals
);
