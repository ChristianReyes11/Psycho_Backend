const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const CategoriaScheme = new mongoose.Schema(
  {
    id_categoria: {
      type: String,
      unique: true,
    },
    descripcion: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

CategoriaScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("categoria", CategoriaScheme);
