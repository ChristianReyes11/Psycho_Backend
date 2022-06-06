const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const ForoScheme = new mongoose.Schema(
  {
    id_publicacion: {
      type: String,
      unique: true,
    },
    fecha_publicacion: {
        type: Date,
      },
    id_persona: {
        type: String,
        unique: true,
      },
    id_categoria: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ForoScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("foro", ForoScheme);
