const { Sequelize } = require("sequelize");
dbInstance = new Sequelize(process.env.POSTGRESQL_CONNECTION);


module.exports = dbInstance;
