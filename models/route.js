import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Routes = sequelize.define('route', {
    Routeid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Route_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'route',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Routeid" },
        ]
      },
    ]
  });
export default Routes
