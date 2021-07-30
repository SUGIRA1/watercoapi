import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Zones = sequelize.define('zone', {
    ZID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'sector',
        key: 'SID'
      }
    },
    Name: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'zone',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ZID" },
        ]
      },
      {
        name: "SID",
        using: "BTREE",
        fields: [
          { name: "SID" },
        ]
      },
    ]
  });
export default Zones
