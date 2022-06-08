const {tipo_personaValidator} = require("../validators/tipo_personaValidator")
const { registertipo_persona } = require("../controllers/tipo_personaController")
const express = require("express");
const router = express.Router()

router.post("/register", tipo_personaValidator, registertipo_persona);

module.exports = router;