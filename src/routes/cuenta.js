import { Router } from "express";
import {
  deleteCuenta,
  getCuenta,
  getCuentaCount,
  getGCuentas,
  saveCuenta,
  updateCuenta,
} from "../controllers/cuenta";
const router = Router();

router.get("/clase/:NUMCUEN/grupo/:CODGRU/cuenta", getGCuentas);

router.get("/clase/:NUMCUEN/grupo/:CODGRU/cuenta/count", getCuentaCount);

router.get("/clase/:NUMCUEN/grupo/:CODGRU/cuenta/:CODIGO", getCuenta);

router.post("/clase/:NUMCUEN/grupo/:CODGRU/cuenta", saveCuenta);

router.delete("/clase/:NUMCUEN/grupo/:CODGRU/cuenta/:CODIGO", deleteCuenta);

router.put("/clase/:NUMCUEN/grupo/:CODGRU/cuenta/:CODIGO", updateCuenta);

export default router;
