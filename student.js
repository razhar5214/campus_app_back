const Sequelize = require("sequelize")
const db = require('./config')


const Student = db.define('Student', {
    firstName:{
        type: Sequelize.STRING(40),
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING(40),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING(300),
        defaultValue: "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
        
    },
    gpa:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
},{
    tableName: "Student"
})

module.exports = Student;