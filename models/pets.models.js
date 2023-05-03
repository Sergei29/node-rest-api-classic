import db from "../db/db.js";

const ERROR_NOT_FOUND = "Pet not found";

/**
 * @param {number} id
 */
const isFound = (id) => {
  const index = db.pets.findIndex((pet) => pet.id === id);
  return index > -1;
};

/**
 * @param {number} id
 */
export const getItem = (id) => {
  if (!isFound(id)) throw new Error(ERROR_NOT_FOUND);

  return db.pets.find((pet) => pet.id === id);
};

export const listItems = () => db.pets;

/**
 * @param { number } id
 * @param { Partial<typeof db.pets[0]> } data
 */
export const editItem = (id, data) => {
  if (!isFound(id)) throw new Error(ERROR_NOT_FOUND);
  db.pets = db.pets.map((pet) => {
    if (pet.id === id) {
      return { ...pet, ...data };
    }
    return pet;
  });

  return db.pets.find((pet) => pet.id === id);
};

/**
 * @param { number } id
 * @param { Omit<typeof db.pets[0], "id"> } data
 */
export const addItem = (data) => {
  const newItem = { id: db.pets.length + 1, ...data };
  db.pets.push(newItem);

  return newItem;
};

/**
 * @param {number} id
 */
export const deleteItem = (id) => {
  if (!isFound(id)) throw new Error(ERROR_NOT_FOUND);
  db.pets = db.pets.filter((pet) => pet.id !== id);

  return db.pets;
};
