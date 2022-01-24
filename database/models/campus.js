const Sequelize = require('sequelize')
const db = require('../db')

const Campus = db.define('Campus', {
    name:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING(400),
        defaultValue: "https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg"
    },
    address:{
        type: Sequelize.STRING(300),
        allowNull: false
    },
    description:{
        type: Sequelize.STRING(500),
    }
},{
    tableName: "Campus"
})

module.exports = Campus;