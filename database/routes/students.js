const express = require('express')
const router = express.Router()
const studentData = require('../models/student')

router.get('/', async (req, res) =>{
    try {
        const students = await studentData.findAll()
        res.status(200).send(students)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
router.get('/:id', async(req, res) => {
    try {
        const student = await studentData.findByPk(req.params.id)
        res.send(student)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('')
        // const student = await studentModel.create({
        //     firstName: "Kenneth",
        //     lastName: "Shurtz",
        //     email: "KenShurtz22@gmail.com",
        //     gpa: 3.97
        // })

router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        student.destroy()
        res.status(200).send(`Deleted student with ID of ${req.params.id}`)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})
module.exports = router;