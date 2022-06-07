const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al dar de alta una sancion
*/
const tipo_personaValidator = [
   check("descripcion").exists().notEmpty().withMessage("descripcion Invalid").isString().isLength({ min: 6, max: 18 }),
   check("id_permiso").exists().notEmpty().withMessage("id_permiso Invalid").isNumeric,
   handleResults,
];


module.exports = {tipo_personaValidator}