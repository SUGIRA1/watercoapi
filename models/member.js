import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Customers = sequelize.define('customer', {
    Customerid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    TelephoneNo: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'customer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Customerid" },
        ]
      }
    ]
  });
export default Customers
