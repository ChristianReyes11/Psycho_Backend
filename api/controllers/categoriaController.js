const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const categoria = require("../../models/nosql/categoria");

/**
 * Registrar Categoría
 * @param {*} req 
 * @param {*} res 
 */
const registerCategoria = (req, res) =>{
    try{
        req = matchedData(req)
        console.log(req)
        res.send({mssg: "**Categoria Registrada**"})

    }catch(err){
        handleHttpError(res, "error en controller", err)
    }
}


/*const updateCategoria = async (req, res) => {
    try {
      const userId = req.categoria.id;
      const userData = matchedData(req);
      //[x]: Creamos un service para actualizar un usuario
      const data = await authService.updateAccount(userId, userData);
  
      res.send({ data });
    } catch (err) {
      handleHttpError(res, "ERROR_UPDATE_USER", err);
    }
  };
*/

module.exports = { registerCategoria, /*updateCategoria*/ }