const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al dar de alta un permiso
*/
const permisoValidator = [
   check("tipo_permiso").exists().notEmpty().withMessage("tipo de permiso Invalid").isString().isLength({ min: 6, max: 18 }),
   handleResults,
];


module.exports = {permisoValidator}