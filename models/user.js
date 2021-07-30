import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Users = sequelize.define('user', {
  UserID: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  
  UserName: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  Email: {
    type: Sequelize.STRING(255),
    allowNull: true
  },

  Password: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'user',
  timestamps: true,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "UserID" },
      ]
    }
    
  ]
});
export default Users
