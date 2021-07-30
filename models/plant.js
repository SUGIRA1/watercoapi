import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Plants = sequelize.define('plant', {
    PlantID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Plant_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    Capacity: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    RID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'route',
        key: 'RID'
      }
    }
  }, {
    sequelize,
    tableName: 'plant',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PlantID" },
        ]
      },
      {
        name: "RID",
        using: "BTREE",
        fields: [
          { name: "RID" },
        ]
      },
    ]
  });
export default Plants
