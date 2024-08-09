var DataTypes = require("sequelize").DataTypes;
var _Customer = require("./Customer");
var _Invoice = require("./Invoice");
var _JobCard = require("./JobCard");
var _Quotation = require("./Quotation");
var _Vehicle = require("./Vehicle");

function initModels(sequelize) {
  var Customer = _Customer(sequelize, DataTypes);
  var Invoice = _Invoice(sequelize, DataTypes);
  var JobCard = _JobCard(sequelize, DataTypes);
  var Quotation = _Quotation(sequelize, DataTypes);
  var Vehicle = _Vehicle(sequelize, DataTypes);

  JobCard.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(JobCard, { as: "JobCards", foreignKey: "customerId"});
  Quotation.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(Quotation, { as: "Quotations", foreignKey: "customerId"});
  Vehicle.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(Vehicle, { as: "Vehicles", foreignKey: "customerId"});
  Quotation.belongsTo(JobCard, { as: "jobcard", foreignKey: "jobcardId"});
  JobCard.hasMany(Quotation, { as: "Quotations", foreignKey: "jobcardId"});
  Invoice.belongsTo(Quotation, { as: "quotation", foreignKey: "quotationId"});
  Quotation.hasMany(Invoice, { as: "Invoices", foreignKey: "quotationId"});
  JobCard.belongsTo(Vehicle, { as: "vehicle", foreignKey: "vehicleId"});
  Vehicle.hasMany(JobCard, { as: "JobCards", foreignKey: "vehicleId"});
  Quotation.belongsTo(Vehicle, { as: "vehicle", foreignKey: "vehicleId"});
  Vehicle.hasMany(Quotation, { as: "Quotations", foreignKey: "vehicleId"});

  return {
    Customer,
    Invoice,
    JobCard,
    Quotation,
    Vehicle,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
