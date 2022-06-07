const express = require("express");
const router = express.Router();

const {registerValidator} = require("../validators/registerValidator")
const {registerPersona} = require("../controllers/personaController")
const {loginValidator} = require("../validators/registerValidator")
const {loginPersona} = require("../controllers/personaController")

/**
 *     
    POST /api/user/register
    PUT /api/user/edit
    POST /api/user/login
    DELETE /api/user/:id_persona}
 */
/**
 * Registrar a un usuario nuevo
 */
router.post("/register", registerValidator, registerPersona);

/**
 * Validar credencianles de  usuario
 */
//router.post("/login", loginValidator, loginPersona);
router.post("/login", loginValidator, loginPersona);

/**
 * Editar a un usuario usando middleware para validar usuario
 */
//router.put("/edit", registerValidator, authMiddleware, updatePersona);

//router.delete("/:id_persona", idPersonaValidator, authMiddleware, deletePersona )

module.exports = router;