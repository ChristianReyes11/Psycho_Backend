const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const persona = require("../../models/nosql/persona");
const { response } = require("express");

const db = require("../../config/firebase")

/**
 * Aquí registramos a una persona
 * 
 * @param {*} req 
 * @param {*} res 
 */
const registerPersona = async (req, res) => {
    //console.log(req.body); //body todo lleno de ruido ¡innecesario!
    req = matchedData(req)
    const newPerson = {...req}
    const resfire = await db.ref("persona").push(newPerson)
    console.log(req)
    res.send({mssg: resfire})
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

/**
 * Este controlador es el encargado de Actualizar los datos de una persona
 * @param {*} req 
 * @param {*} res 
 */
const updatePersona = async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = matchedData(req);
    //[x]: Creamos un service para actualizar un usuario
    const data = await authService.updateAccount(userId, userData);

    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_USER", err);
  }
};



module.exports = {registerPersona, loginPersona, updatePersona}