const { check } = require("express-validator");
const handleResults = require("../handlers/handleValidator");

/**
 * validacion al dar de alta un foro
 */
const foroValidator = [
  check("message")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 4, max: 200 }),
  handleResults,
];

module.exports = { foroValidator };
