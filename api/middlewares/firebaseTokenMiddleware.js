const {admin} = require("../../config/firebase")
const {handleHttpError} = require("../handlers/handleError")

const firebaseTokenMiddleware = async (req, res, next) => {
    try{
        const firebaseToken = req.body.token || "";

        //* validamos el token con firebase
        admin.auth().verifyIdToken(firebaseToken, true).then(()=> {
            next();
        }).catch(()=> {
            handleHttpError(res, "Invalid Token");
        })
    }catch(err) {
        handleHttpError(res, "Error Middleware Token", err)
    }
}

module.exports = {firebaseTokenMiddleware}