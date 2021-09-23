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

/**
 * @swagger
 * tags:
 *  name: Cuentas
 *  description: Cuentas endpoint
 */

/**
 * @swagger
 *  /clase:
 *    get: 
 *      summary: Obtiene todas las Cuentas
 *      tags: [Cuentas]
 */


router.get("/clase", getClases);

/**
 * @swagger
 *  /clase/count:
 *    get: 
 *      summary: Obtiene el numero total de cuentas creadas
 *      tags: [Cuentas]
 */

router.get("/clase/count", getClaseCount);

/**
 * @swagger
 *  /clase:NUMCUEN:
 *    get: 
 *      summary: Obtiene una cuenta en especifico debido a su numero de cuenta
 *      tags: [Cuentas]
 */

router.get("/clase/:NUMCUEN", getClase);

/**
 * @swagger
 *  /clase:
 *    post: 
 *      summary: Crea una cuenta
 *      tags: [Cuentas]
 */

router.post("/clase", saveClase);

/**
 * @swagger
 *  /clase/:NUMCUEN:
 *    delete: 
 *      summary: Elimina una clase de cuenta debido a su numero de cuenta 
 *      tags: [Cuentas]
 */

router.delete("/clase/:NUMCUEN", deleteClase);

/**
 * @swagger
 *  /clase/:NUMCUEN:
 *    put: 
 *      summary: Actualiza una cuenta debido a su numero de cuenta
 *      tags: [Cuentas]
 */

router.put("/clase/:NUMCUEN", updateClase);

export default router;
