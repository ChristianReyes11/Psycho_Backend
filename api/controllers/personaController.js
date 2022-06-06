const { matchedData } = require("express-validator");
const { handleHttpError } = require("../handlers/handleError");
const persona = require("../../models/nosql/persona");
const { response } = require("express");


const registerPersona = (req, res) => {
    //console.log(req.body); //body todo lleno de ruido ¡innecesario!
    req = matchedData(req)
    console.log(req)
    res.send({mssg: "muy bien"})
}



module.exports = {registerPersona}