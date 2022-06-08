const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");

const permiso = require("../../models/nosql/permiso");
const { response } = require("express");

/**
 * Registrar Permiso
 * @param {*} req 
 * @param {*} res 
 */
const registerPermiso = (req, res) =>{
    try{
        req = matchedData(req)
        console.log(req)
        res.send({mssg: "**Permiso Registrada**"})

    }catch(err){
        handleHttpError(res, "error en controller", err)
    }
}


module.exports = { registerPermiso }