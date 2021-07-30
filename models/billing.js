import Sequelize from "sequelize";
import {sequelize} from "../db/dbConnect.js";

const Bills = sequelize.define('billing', {
    billid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PremiseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'premise',
        key: 'PremiseId'
      }
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'UserID'
      }
    },
    Reading: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  }, {
    sequelize,
    tableName: 'billing',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "billing_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "PremiseId" },
        ]
      },
      {
        name: "billing_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
export default Bills
