import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Sectors = sequelize.define('sector', {
    SID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    'Office Physical Address': {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sector',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SID" },
        ]
      },
    ]
  });
export default Sectors
