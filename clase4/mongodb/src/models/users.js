const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/postgresql");

class User extends Model {}

User.init(
{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    freezeTableName: true
}
);

module.exports = User;