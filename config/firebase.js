const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://psycho-7c867-default-rtdb.firebaseio.com"
// })

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://psycho-7c867.firebaseio.com",
});

// const db = admin.database();

const db = admin.firestore();

module.exports = { db, admin };

//api/foro/ansiedad
//api/foro/depresion
//Tocken
