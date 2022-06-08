const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");

/*const admin = require("firebase-admin");


const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseUrl: "https://psycho-7c867-default-rtdb.firebaseio.com"
})
*/

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

/**
 * Este controlador es el encargado de Actualizar los datos de una persona
 * @param {*} req 
 * @param {*} res 
 */
/*const updatePersona = async (req, res) => {
  try {
    const userId = req.persona.Id;
    const userData = matchedData(req);
    //[x]: Creamos un service para actualizar un usuario
    const data = await authService.updateAccount(userId, userData);

    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_USER", err);
  }
};
*/


module.exports = {registerPersona, loginPersona, /*updatePersona*/ }