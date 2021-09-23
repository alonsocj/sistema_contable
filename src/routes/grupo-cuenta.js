import { Router } from "express";
import {
  getGrupos,
  getGrupoCount,
  getGrupo,
  saveGrupo,
  deleteGrupo,
  updateGrupo,
} from "../controllers/grupo-cuenta";

const router = Router();

router.get("/clase/:NUMCUEN/grupo", getGrupos);

router.get("/clase/:NUMCUEN/grupo/count", getGrupoCount);

router.get("/clase/:NUMCUEN/grupo/:CODGRU", getGrupo);

router.post("/clase/:NUMCUEN/grupo", saveGrupo);

router.delete("/clase/:NUMCUEN/grupo/:CODGRU", deleteGrupo);

router.put("/clase/:NUMCUEN/grupo/:CODGRU", updateGrupo);

export default router;
