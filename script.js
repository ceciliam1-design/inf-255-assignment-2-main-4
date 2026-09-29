const animals = [
  { id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
  { id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
  { id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
  { id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
  { id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
  { id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
  { id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
  { id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

const animalNames = animals.map((animal) => animal.name);
console.log("Task 1 - Animal Names:", animalNames);

animals.forEach((animal) => {
  console.log(`${animal.name} is a${animal.species}.`);
});

for (const animal of animals) {
  console.log(
    `${animal.name} is${animal.age} years old. Adopted: ${animal.adopted}`
  );
}

const adoptedAnimals = animals.filter((animal) => animal.adopted);
const availableAnimals = animals.filter((animal) => !animal.adopted);

console.log("Task 4 - Adopted:", adoptedAnimals);
console.log("Task 4 - Available:", availableAnimals);

const availableDogNames = animals
  .filter(animal => animal.species === "dog" && !animal.adopted)
  .map(animal => animal.name);

console.log("Task 5 - Available Dogs:", availableDogNames);

const totalAge = animals.reduce((sum, animal) => sum + animal.age, 0);
const averageAge = totalAge / animals.length;

console.log("Task 6 - Average Age:", averageAge);

function isCat(animal) {
  return animal.species === "cat";
}

function isAdopted(animal) {
  return animal.adopted;
}

function getName(animal) {
  return animal.name;
}

const adoptedCatNames = animals 
  .filter(isCat)
  .filter(isAdopted)
  .map(getName);

console.log("Task 8 - Adopted Cats:", adoptedCatNames);

function makeSpeciesChecker(targetSpecies) {
  return function(animal) {
    return animal.species === targetSpecies;
  };
}

const isDog = makeSpeciesChecker("dog");
const isRabbit = makeSpeciesChecker("rabbit");

const dogNames = animals.filter(isDog).map(getName);
const rabbitNames = animals.filter(isRabbit).map(getName);

console.log("Task 10 - Dog Names:", dogNames);
console.log("Task 10 - Rabbit Names:", rabbitNames);
