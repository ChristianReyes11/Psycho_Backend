const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Persona = sequelize.define(
  "persona",
  {
    id_persona: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    edad: {
      type: DataTypes.NUMBER,
    },
    genero: {
      type: DataTypes.ENUM(["H", "M"]),
    },
    password: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
Persona.find = Persona.findAll;
Persona.findById = Persona.findByPk;
module.exports = Persona;