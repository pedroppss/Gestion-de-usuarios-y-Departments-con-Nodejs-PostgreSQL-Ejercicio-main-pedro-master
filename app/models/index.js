const dbConfig = require("../Configuracion/db.config.js");
const Sequelize = require("sequelize");
const DataTypes=require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.sync({force:false})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.departamentoss=require("./departments.model.js")(sequelize, Sequelize);
db.users = require('./departmentsuser.model.js') (sequelize, DataTypes);

module.exports = db;