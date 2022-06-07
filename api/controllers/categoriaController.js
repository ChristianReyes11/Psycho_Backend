const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const categoria = require("../../models/nosql/categoria");

const registerCategoria = (req, res) =>{
    try{
        req = matchedData(req)
        console.log(req)
        res.send({mssg: "**Categoria Registrada**"})

    }catch(err){
        handleHttpError(res, "error en controller", err)
    }
}

module.exports = { registerCategoria }