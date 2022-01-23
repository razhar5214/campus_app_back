const express = require('express');
const app = express();
const cors = require("cors");
const sequelize = require("sequelize");
const db = require('./config')
const studentModel = require("./student")
// const campusModel = require("./campus")



// import { Sequelize, Model, DataTypes } from 'sequelize'
// const knex = require("knex")


// const user = '<postgres user>'
// const host = 'localhost'
// const database = '<postgres db name>'
// const password = '<postgres password>'
// const port = '<postgres port>'

let students;
const start = async() =>{
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        studentModel.sync();
        students = await studentModel.findAll()
        console.log(students)
        // const student = await studentModel.create({
        //     firstName: "Kenneth",
        //     lastName: "Shurtz",
        //     email: "KenShurtz22@gmail.com",
        //     gpa: 3.97
        // })


      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
start();






app.use(cors()) //related to routes, place above


// const db = knex({
//     client: "pg",
//     connection: {
//         host: "127.0.0.1",
//         user: "",
//         password: "",
//         database: "student_campus_db"
//     }
// })

app.get('/', (req, res) =>{
    res.send("Welcome to the backend");
})


app.get('/campuslist', (req, res) =>{
    // res.send("I am going to send my campuses data here");

        res.json([{
            name: "Brooklyn College",
            imageUrl: "https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg",
            address: "2900 Bedford Ave, Brooklyn, NY 11210",
            description: "Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus."
        },
        {
            name: "Kingsborough Community College",
            imageUrl: "https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg",
            address: "2001 Oriental Blvd, Brooklyn, NY 11235",
            description: "Kingsborough Community College is a public community college in Brooklyn, New York. It is part of the City University of New York system and the only community college in Brooklyn."
        },
        {
            name: "Medgar Evers College",
            imageUrl: "https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg",
            address: "1650 Bedford Ave, Brooklyn, NY 11225",
            description: "Medgar Evers College is a public college in New York City. It is a senior college of the City University of New York, offering baccalaureate and associate degrees."
        },
        {
            name: "New York City College of Technology",
            imageUrl: "https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg",
            address: "300 Jay St, Brooklyn, NY 11201",
            description: "The New York City College of Technology is a public college in New York City. Founded in 1946, it is the City University of New York's college of technology."
        }
    ])
})

app.get('/studentlist', (req, res) =>{
    // res.send("I am going to send my campuses data here");

        res.json(students)
})

app.listen(3001, ()=>{
    console.log("Server is working!!!")
})