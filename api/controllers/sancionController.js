const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const sancion = require("../../models/nosql/sancion");


const registerSancion = (req, res) =>{
    try{
        req = matchedData(req)
        console.log(req)
        res.send({mssg: "**Sancion Registrada**"})

    }catch(err){
        handleHttpError(res, "error en controller", err)
    }
}

module.exports = { registerSancion }