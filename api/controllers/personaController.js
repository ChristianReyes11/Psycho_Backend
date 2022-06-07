const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const persona = require("../../models/nosql/persona");
const { response } = require("express");

/**
 * Aquí registramos a una persona
 * 
 * @param {*} req 
 * @param {*} res 
 */
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
/* const loginPersona = (req, res) => {
    req = matchedData(req)
    console.log(req)
    res.send({mssg: "**Bienvenido**"})
}*/
const loginPersona = async (req, res) => {
  try {
    req = matchedData(req)
    console.log(req)
    const userData = matchedData(req);
    //servicio para autenticar usuario
    const data = await authService.userSignIn(userData);

    res.send({ data });
  } catch (err) {
    req = matchedData(req)
    console.log(req)
    handleHttpError(res, "ERROR_LOGIN", err);
  }
};

module.exports = {registerPersona, loginPersona}