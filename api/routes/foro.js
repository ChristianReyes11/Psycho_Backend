const express = require("express");
const router = express.Router();

//* MIDDLEWARES
const {
  firebaseTokenMiddleware,
} = require("../middlewares/firebaseTokenMiddleware");

//* VALIDATORS
const { foroValidator } = require("../validators/foroValidator");

//* CONTROLLERS
const {
  readAnsiedad,
  createAnsiedad,
} = require("../controllers/foroController");

/**
 * POST /api/foro/ansiedad
 * Post /api/foro/depresion
 * DELETE /api/foro/delete
 */
router.post("/ansiedad", foroValidator /*ansiedadForo*/);
router.post("/depresion", foroValidator /*depresionForo*/);
router.post("/delete", foroValidator /*deleteForo*/);

/**
 * >obtener mensajes en ese foro
 */
router.get("/ansiedad", /* firebaseTokenMiddleware, */ readAnsiedad);

/**
 * > Registrar mensajes en es foro
 */
router.post(
  "/ansiedad",
  // firebaseTokenMiddleware,
  foroValidator,
  createAnsiedad
);
//
//

module.exports = router;
