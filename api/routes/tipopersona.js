const {tipo_personaValidator} = require("../validators/tipo_personaValidator")
const { registerTipo_Persona } = require("../controllers/tipo_personaController")
const express = require("express");
const router = express.Router()

router.post("/register", tipo_personaValidator, registerTipo_Persona);

module.exports = router;
