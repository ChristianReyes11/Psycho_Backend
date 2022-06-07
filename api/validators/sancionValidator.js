const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al dar de alta una sancion
*/
const sancionValidator = [
   check("tipo").exists().notEmpty().withMessage("region Invalid").isString().isLength({ min: 6, max: 18 }),
   check("fecha").exists().notEmpty().withMessage("edad Invalid").isDate(),
   handleResults,
];


module.exports = {sancionValidator}