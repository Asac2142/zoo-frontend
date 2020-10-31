import { createSelector } from 'reselect';

const selectInjuredAnimals = state => state.injuredAnimals;

export const selectAllInjuredAnimals = createSelector(
    [selectInjuredAnimals], 
    iAnimals => iAnimals.animals
);
