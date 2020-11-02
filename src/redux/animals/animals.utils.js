export const setHealthyAnimal = (animals, id) => {
    let animal = animals.filter(animl => animl.id === id);
    let pos = animals.findIndex(animl => animl.id === id);

    animal[0].active = true;
    animals[pos] = animal[0];
    return [...animals];
};
