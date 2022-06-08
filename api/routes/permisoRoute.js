const {permisoValidator} = require("../validators/permisoValidator")
const { registerpermiso } = require("../controllers/permisoController")
const express = require("express");
const router = express.Router()

router.post("/register", permisoValidator, registerpermiso);

module.exports = router;
