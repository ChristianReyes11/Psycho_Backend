const admin = require("firebase-admin");


const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseUrl: "https://psycho-7c867-default-rtdb.firebaseio.com"
})

const db = admin.database();

module.exports = db;