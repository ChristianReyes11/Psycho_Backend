const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const sancion = require("../../models/nosql/sancion");


const registerTipo_Persona = (req, res) =>{
    try{
        req = matchedData(req)
        console.log(req)
        res.send({mssg: "**Tipo persona Registrada**"})

    }catch(err){
        handleHttpError(res, "error en controller", err)
    }
}

module.exports = { registerTipo_Persona }