const mysql = require("mysql2");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "et-node",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
