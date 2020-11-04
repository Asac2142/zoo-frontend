export const setHealthyAnimal = (animals, id) => {
    let pos = animals.findIndex(animl => animl.id === id);
    if (pos >= 0) {
        animals[pos] = {...animals[pos], active: true};
    }
    return [...animals];
};

export const updateAnimal = (animals, animalToBeUpdated) => {
    let pos = animals.findIndex(animal => animal.id === animalToBeUpdated.id);    
    if (pos >= 0) {
        animals[pos] = animalToBeUpdated;
    }
    return [...animals];
};

export const deleteAnimal = (animals, animalToBeDeleted) => {
    const pos = animals.findIndex(animal => animal.id === animalToBeDeleted.id);
    if (pos >= 0) {
        animals.splice(pos, 1);
    }
    return [...animals];
};
