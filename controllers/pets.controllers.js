import express from "express";
import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem,
} from "../models/pets.models.js";

const { Request, Response } = express;

/**
 * @param { Request } req
 * @param { Response } res
 */
export const getPet = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * @param { Request } req
 * @param { Response } res
 */
export const listPets = (req, res) => {
  try {
    const resp = listItems();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * @param { Request } req
 * @param { Response } res
 */
export const editPet = (req, res) => {
  try {
    const resp = editItem(parseInt(req.params.id), req.body);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * @param { Request } req
 * @param { Response } res
 */
export const addPet = (req, res) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * @param { Request } req
 * @param { Response } res
 */
export const deletePet = (req, res) => {
  try {
    const resp = deleteItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};
