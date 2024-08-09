const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice', {
    invoiceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quotationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Quotation',
        key: 'quotationId'
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
    tableName: 'Invoice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoiceId" },
        ]
      },
      {
        name: "quotationId",
        using: "BTREE",
        fields: [
          { name: "quotationId" },
        ]
      },
    ]
  });
};
