const { check } = require("express-Router");
const handleResults = require("../handlers/handleRouter");

const sancionRouter = [
   check("tipo").exists().notEmpty().withMessage("region Invalid").isString().isLength({ min: 6, max: 18 }),
   check("fecha").exists().notEmpty().withMessage("edad Invalid").isDate(),
   handleResults,
];

module.exports = {sancionRouter}
