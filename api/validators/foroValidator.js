const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
 * validacion al dar de alta un foro
 */
const foroValidator = [
  // check("fecha_publicacion").exists().notEmpty().isDate, //ESTE SE DARA EN EL CONTROLLER
  check("id_persona").exists().notEmpty().isNumeric,
  check("id_categoria").exists().notEmpty().isNumeric,
  handleResults,
];

module.exports = { foroValidator };
