const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const persona = require("../../models/nosql/persona");
const { response } = require("express");


const registerPersona = (req, res) => {
    //console.log(req.body); //body todo lleno de ruido ¡innecesario!
    req = matchedData(req)
    console.log(req)
    res.send({mssg: "**Usuario Registrado**"})
}

/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
 const loginPersona = (req, res) => {
    req = matchedData(req)
    console.log(req)
    res.send({mssg: "**Bienvenido**"})
}



module.exports = {registerPersona, loginPersona}