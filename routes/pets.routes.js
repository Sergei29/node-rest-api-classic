import { Router } from "express";
import {
  getPet,
  listPets,
  editPet,
  deletePet,
  addPet,
} from "../controllers/pets.controllers.js";

const router = Router();

router.get("/", listPets);
router.get("/:id", getPet);
router.post("/", addPet);
router.put("/:id", editPet);
router.delete("/:id", deletePet);

export default router;
