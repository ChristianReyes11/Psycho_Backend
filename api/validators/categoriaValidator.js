const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
* validacion al dar de alta una categoria
*/
const categoriaValidator = [
   check("descripcion").exists().notEmpty().withMessage("descripción Invalid").isString().isLength({ min:4, max: 18 }),
   handleResults,
];


module.exports = {categoriaValidator}