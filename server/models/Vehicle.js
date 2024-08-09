const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vehicle', {
    vehicleId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'customerId'
      }
    },
    regNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "regNo"
    },
    vin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "vin"
    },
    engineNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "engineNo"
    },
    make: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bodyType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Vehicle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vehicleId" },
        ]
      },
      {
        name: "regNo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regNo" },
        ]
      },
      {
        name: "vin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vin" },
        ]
      },
      {
        name: "engineNo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "engineNo" },
        ]
      },
      {
        name: "customerId",
        using: "BTREE",
        fields: [
          { name: "customerId" },
        ]
      },
    ]
  });
};
