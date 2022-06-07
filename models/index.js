const models = {
  personaModel: require("./nosql/persona"),
  catrgoriaModel: require("./nosql/categoria"),
  permisoModel: require("./nosql/permiso"),
  sancionModel: require("./nosql/sancion"),
  tipo_personaModel: require("./nosql/tipo_persona"),
};

module.exports = models;