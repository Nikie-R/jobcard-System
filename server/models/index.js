const { Sequelize } = require("sequelize");
const config = require("../config/config");
const environment = process.env.ENVIRONMENT || "development";
const dbConfig = config[environment];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
  }
);

const Customer = require("./Customer")(sequelize, Sequelize);
const Vehicle = require("./Vehicle")(sequelize, Sequelize);
const JobCard = require("./JobCard")(sequelize, Sequelize);
const Quotation = require("./Quotation")(sequelize, Sequelize);
const Invoice = require("./Invoice")(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  Customer,
  Vehicle,
  JobCard,
  Quotation,
  Invoice,
};

module.exports = db;
