const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al registrar un usuario
*/
const registerValidator = [
   check("email").exists().notEmpty().withMessage("email Invalid").isEmail(),
   check("region").exists().notEmpty().withMessage("region Invalid").isString().isLength({ min: 6, max: 18 }),
   check("edad").exists().notEmpty().withMessage("edad Invalid").isNumeric().isLength({min: 2}),
   check("genero").exists().notEmpty().withMessage("genero Invalid").isString(),
   check("password").exists().notEmpty().withMessage("password Invalid").isString().isLength({ min: 8, max: 16 }),
   check("telefono").isNumeric(),
   handleResults,
];


module.exports = {registerValidator}