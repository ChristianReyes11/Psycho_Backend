const {permisoValidator} = require("../validators/permisoValidator")
const { registerPermiso } = require("../controllers/permisoController");
const express = require("express");
const router = express.Router()

router.post("/register", permisoValidator, registerPermiso);

module.exports= router;