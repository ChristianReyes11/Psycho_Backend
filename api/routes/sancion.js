const {sancionValidator} = require("../validators/sancionValidator")
const { registerSancion } = require("../controllers/sancionController")
const express = require("express");
const router = express.Router()

router.post("/register", sancionValidator, registerSancion);

module.exports = router;
