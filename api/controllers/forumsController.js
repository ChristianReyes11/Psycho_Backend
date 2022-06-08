const { matchedData } = require("express-validator");
const { db } = require("../../config/firebase");
const { handleHttpError } = require("../handlers/handleError");

const readForum = (req, res) => {
  try {
    const issue = matchedData(req);
    db.ref(issue).once("value", (snapshoot) => {
      const messages = snapshoot.val();
      res.send(messages);
    });
  } catch (err) {
    handleHttpError(res, "Error en el controlador", err);
  }
};

module.exports = { readForum };
