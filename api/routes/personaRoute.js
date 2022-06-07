const {personaValidator} = require("../validators/personaValidator")
const { registerpersona } = require("../controllers/personaController")
const express = require("express");
const router = express.Router()

router.post("/register", personaValidator, registerpersona);

module.exports = router;
