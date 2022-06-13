const { matchedData } = require("express-validator");
const { db } = require("../../config/firebase");
const { handleHttpError } = require("../handlers/handleError");

const readAnsiedad = async (req, res) => {
  try {
    // db.ref("ansiedad").once("value", (snapshoot) => {
    //   const messages = snapshoot.val();
    //   res.send(messages);
    // });
    req = matchedData(req);
    const data = await db
      .ref("cforum")
      .get()
      .then((message) => {
        return message;
      });
    res.status(200).send({ success: true, data: data.val() });
  } catch (err) {
    handleHttpError(res, "Error en el controlador", err);
  }
};

const readDepresion = (req, res) => {
  try {
    db.ref("ansiedad").once("value", (snapshoot) => {
      const messages = snapshoot.val();
      res.send(messages);
    });
  } catch (err) {
    handleHttpError(res, "Error en el controlador", err);
  }
};

const createAnsiedad = async (req, res) => {
  try {
    req = matchedData(req);
    await db
      .ref("cforum")
      .push(req)
      .then(() => {
        res.status(200).send({ success: true });
      });
  } catch (err) {}
};

module.exports = { readAnsiedad, createAnsiedad };
