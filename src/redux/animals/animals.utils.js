export const setHealthyAnimal = (animals, id) => {
    let animal = animals.filter(animl => animl.id === id);
    let pos = animals.findIndex(animl => animl.id === id);

    animal[0].active = true;
    animals[pos] = animal[0];
    return [...animals];
};

export const updateAnimal = (animals, animalToBeUpdated) => {
    let pos = animals.findIndex(animal => animal.id === animalToBeUpdated.id);
    animals[pos] = animalToBeUpdated;
    return [...animals];
};

export const deleteAnimal = (animals, animalToBeDeleted) => {
    const pos = animals.findIndex(animal => animal.id === animalToBeDeleted.id);
    animals.splice(pos, 1);
    return [...animals];
};
