const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Tipo_PersonaScheme = new mongoose.Schema(
  {
    id_tipo_persona: {
      type: Number,
    },
    descripcion: {
      type: String,
    },
    id_permiso: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

Tipo_PersonaScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tipo_persona", Tipo_PersonaScheme);