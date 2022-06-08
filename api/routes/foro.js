const {foroValidator} = require("../validators/foroValidator")
//const { ansiedadForo } = require("../controllers/foroController")
const express = require("express");
const router = express.Router()


/**
 * POST /api/foro/ansiedad
 * Post /api/foro/depresion
 * DELETE /api/foro/delete
 */
router.post("/ansiedad", foroValidator, /*ansiedadForo*/);
router.post("/depresion", foroValidator, /*depresionForo*/);
router.post("/delete", foroValidator, /*deleteForo*/);
//
//

module.exports = router;