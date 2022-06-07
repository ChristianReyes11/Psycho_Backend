const { check } = require("express-Router");
const handleResults = require("../handlers/handleRouter");

const tipo_personaRoutes = [
   check("descripcion").exists().notEmpty().withMessage("descripcion Invalid").isString().isLength({ min: 6, max: 18 }),
   check("id_permiso").exists().notEmpty().withMessage("id_permiso Invalid").isNumeric,
   handleResults,
];

module.exports = {tipo_personaRouter}
