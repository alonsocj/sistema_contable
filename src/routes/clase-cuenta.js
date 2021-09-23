import { Router } from "express";
import {
  getClase,
  getClases,
  getClaseCount,
  saveClase,
  deleteClase,
  updateClase,
} from "../controllers/clase-cuenta";
const router = Router();

router.get("/clase", getClases);

router.get("/clase/count", getClaseCount);

router.get("/clase/:NUMCUEN", getClase);

router.post("/clase", saveClase);

router.delete("/clase/:NUMCUEN", deleteClase);

router.put("/clase/:NUMCUEN", updateClase);

export default router;
