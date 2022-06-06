require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * se usa el puerto definido en .env (default 3000)
 */
const port = process.env.PORT || 3000;

/**
 * route homepage
 */
app.get("/", (req, res) => {
  res.send("**Bienvenido a Psycho**");
});

/**
 * usamos ./routes/index.js para manejar endpoints
 */
app.use("/api/", require("./api/routes/"));

app.listen(port, () => {
  console.log(`Corriendo servidor en puerto: ${port}`);
});