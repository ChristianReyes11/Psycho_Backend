const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const { db } = require("../../config/firebase");

/**
 * Aquí registramos a una persona
 *
 * @param {*} req
 * @param {*} res
 */
const registerPersona = async (req, res) => {
  try {
    //console.log(req.body); //body todo lleno de ruido ¡innecesario!
    req = matchedData(req);
    const newPerson = { ...req };
    var data = {};
    data = await db
      .ref("persona")
      .get()
      .then((personas) => {
        return personas;
      });
    const emailAlreadyExist = data.forEach((persona) => {
      const p = persona.val();
      if (p.email === newPerson.email) {
        return true;
      }
    });

    if (emailAlreadyExist) {
      res.status(409).send({ success: false, mssg: "email already exist!" });
    } else {
      // > Registramos a el usuario
      db.ref("persona").push(newPerson);
      res.status(200).send({ success: true });
    }

    // //> Respondemos al usuario con objeto de usuario creado
    // db.ref("persona").once("value", function (snapshot) {
    //   return snapshot.forEach(function (childSnapshot) {
    //     var childData = childSnapshot.val();
    //     if (childData.email === newPerson.email) {
    //       res.status(200).send({ success: true, ...childData });
    //     }
    //   });
    // });
  } catch (err) {
    console.log(err);
  }
};

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
    req = matchedData(req);
    console.log(req);
    const userData = matchedData(req);
    //servicio para autenticar usuario
    const data = await authService.userSignIn(userData);

    res.send({ data });
  } catch (err) {
    req = matchedData(req);
    console.log(req);
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

module.exports = { registerPersona, loginPersona /*updatePersona*/ };
