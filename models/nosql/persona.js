const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const PersonaScheme = new mongoose.Schema(
  {
    id_persona: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    region: {
      type: String,
    },
    edad: {
      type: Number,
    },
    genero: {
      type: String,
    },
/*    latitud: {
    },*/
/*    longitud: {
    },*/
    password: {
      type: String,
    },
    telefono: {
      type: Number,
    },
/*    role: {
      type: ["user", "admin"],
      default: "user",
    },*/
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

PersonaScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("persona", PersonaScheme);
