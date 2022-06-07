const {sancionValidator} = require("../validators/sancionValidator")
const { registerCategoria } = require("../controllers/sancionController")
const express = require("express");
const router = express.Router()

router.post("/register", sancionValidator, registersancion);

module.exports = router;
