const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quotation', {
    quotationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jobcardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'JobCard',
        key: 'jobcardId'
      }
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
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    items: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Quotation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quotationId" },
        ]
      },
      {
        name: "jobcardId",
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
