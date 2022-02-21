const Sequelize =  require("sequelize");
require('dotenv').config()

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;
const sequelize = new Sequelize(dbName,dbUser,dbpassword, {
    host: dbhost,
    dialect: 'mysql'
});

module.exports =  sequelize;