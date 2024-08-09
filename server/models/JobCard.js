const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobCard', {
    jobcardId: {
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
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vehicle',
        key: 'vehicleId'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    kilometers: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fuelLevel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    battery: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triangle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    spareTyre: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    jack: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    complaint: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'JobCard',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "jobcardId" },
        ]
      },
      {
        name: "customerId",
        using: "BTREE",
        fields: [
          { name: "customerId" },
        ]
      },
      {
        name: "vehicleId",
        using: "BTREE",
        fields: [
          { name: "vehicleId" },
        ]
      },
    ]
  });
};
