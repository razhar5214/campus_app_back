const sequelize = require("sequelize");

const db = new sequelize("postgresql://localhost:5432/student_campus_db")

module.exports = db;