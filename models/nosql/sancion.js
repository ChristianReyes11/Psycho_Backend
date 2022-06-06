const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const SancionScheme = new mongoose.Schema(
  {
    id_sancion: {
      type: String,
      unique: true,
    },
    tipo: {
      type: String,
    },
    fecha: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

SancionScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("sancion", SancionScheme);
