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

// Define associations
JobCard.belongsTo(Customer, { as: "customer", foreignKey: "customerId" });
Customer.hasMany(JobCard, { as: "JobCards", foreignKey: "customerId" });

Quotation.belongsTo(Customer, { as: "customer", foreignKey: "customerId" });
Customer.hasMany(Quotation, { as: "Quotations", foreignKey: "customerId" });

Vehicle.belongsTo(Customer, { as: "customer", foreignKey: "customerId" });
Customer.hasMany(Vehicle, { as: "Vehicles", foreignKey: "customerId" });

Quotation.belongsTo(JobCard, { as: "jobcard", foreignKey: "jobcardId" });
JobCard.hasMany(Quotation, { as: "Quotations", foreignKey: "jobcardId" });

Invoice.belongsTo(Quotation, { as: "quotation", foreignKey: "quotationId" });
Quotation.hasMany(Invoice, { as: "Invoices", foreignKey: "quotationId" });

JobCard.belongsTo(Vehicle, { as: "vehicle", foreignKey: "vehicleId" });
Vehicle.hasMany(JobCard, { as: "JobCards", foreignKey: "vehicleId" });

Quotation.belongsTo(Vehicle, { as: "vehicle", foreignKey: "vehicleId" });
Vehicle.hasMany(Quotation, { as: "Quotations", foreignKey: "vehicleId" });

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
