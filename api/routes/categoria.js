const {categoriaValidator} = require("../validators/categoriaValidator")
const { registerCategoria } = require("../controllers/categoriaController")
const express = require("express");
const router = express.Router()


/**
 * POST /api/categoria/create
 * PUT /api/categoria/edit
 * DELETE /api/categoria/:id_categoria
 */
router.post("/register", categoriaValidator, registerCategoria);
//router.put("/edit", categoriaValidator, updateCategoria);
//router.delete("/:id_categoria", , ,deleteCategoria)
//
//

module.exports = router;