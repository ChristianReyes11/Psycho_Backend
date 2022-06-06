const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const PermisoScheme = new mongoose.Schema(
  {
    id_Permiso: {
      type: Number,
    },
    tipo_Permiso: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

PermisoScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("permiso", PermisoScheme);