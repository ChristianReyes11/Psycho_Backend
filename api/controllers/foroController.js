const { matchedData } = require("express-validator");
const { db } = require("../../config/firebase");
const { handleHttpError } = require("../handlers/handleError");

const readAnsiedad = async (req, res) => {
  try {
    // db.ref("ansiedad").once("value", (snapshoot) => {
    //   const messages = snapshoot.val();
    //   res.send(messages);
    // });

    const query = db.collection("cforum");
    const result = await query.get();
    const messages = result.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().mensajes,
    }));

    res.send(messages);
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

module.exports = { readAnsiedad };
