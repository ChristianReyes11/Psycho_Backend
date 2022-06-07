const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");

const persona = require("../../models/nosql/persona");
const { response } = require("express");

const registerPersona = (req, res) => {
    //console.log(req.body);
    req = matchedData(req)
    console.log(req)
    res.send({mssg: "**Usuario Registrado**"})
}

 * @param {*} req 
 * @param {*} res 

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
    const data = await authService.userSignIn(userData);

    res.send({ data });
  } catch (err) {
    req = matchedData(req)
    console.log(req)
    handleHttpError(res, "ERROR_LOGIN", err);
  }
};

 * @param {*} req 
 * @param {*} res 
 
const updatePersona = async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = matchedData(req);
    const data = await authService.updateAccount(userId, userData);

    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_USER", err);
  }
};

module.exports = {registerPersona, loginPersona, updatePersona}
