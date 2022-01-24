const express = require('express');
const morgan = require('morgan')
const cors = require("cors");
const sequelize = require("sequelize");
const db = require('./database/db')
const studentModel = require("./database/models/student")
const campusModel = require("./database/models/campus")

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


let students = null;
const start = async() =>{
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        studentModel.sync();
        campusModel.sync();
        // students = await studentModel.findAll();
        campuses = await campusModel.findAll();
        console.log(students);
        console.log(campuses);

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
start();

const studentRouter = require("./database/routes/students")
const campusRouter = require('./database/routes/campuses')

app.use('/students', studentRouter)
app.use('/campuses', campusRouter)


app.get('/', (req, res) =>{
    res.send("Welcome to the backend");
})

PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Server is working!!!")
})