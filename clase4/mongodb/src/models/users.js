const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/postgresql");
const {encryptPassword} = require("../utils/authentication");

class User extends Model {}

User.init(
{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    }
    ,
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(password) {
          this.setDataValue("password", encryptPassword(password));
        }
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    freezeTableName: true
}
);

module.exports = User;