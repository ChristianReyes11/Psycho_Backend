const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al registrar un usuario
*/
const registerValidator = [
   check("email").exists().notEmpty().isEmail(),
   check("region").exists().notEmpty().isString().isLength({ min: 6, max: 18 }),
   check("edad").exists().notEmpty().isNumeric().isLength({min: 2}),
   check("genero").exists().notEmpty().isString(),
   check("password").exists().notEmpty().isString().isLength({ min: 8, max: 16 }),
   check("telefono").isNumeric(),
   handleResults,
];


module.exports = {registerValidator}