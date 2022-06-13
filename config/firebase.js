const firebase = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://psycho-7c867-default-rtdb.firebaseio.com",
});

const db = firebase.database();

module.exports = { db };
