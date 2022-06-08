const express = require("express");
const router = express.Router();

//* MIDDLEWARES
const {
  firebaseTokenMiddleware,
} = require("../middlewares/firebaseTokenMiddleware");

//* VALIDATORS
const { foroValidator } = require("../validators/foroValidator");

//* CONTROLLERS
const { readAnsiedad } = require("../controllers/foroController");

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
router.get("/ansiedad", /*firebaseTokenMiddleware,*/ readAnsiedad);

//
//

module.exports = router;
