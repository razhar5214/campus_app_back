const express = require('express')
const router = express.Router()
const campusData = require('../models/campus')

router.get('/', async (req, res) =>{
    try {
        const campuses = await campusData.findAll()
        res.status(200).send(campuses)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
router.get('/:id', async(req, res) => {
    try {
        const campus = await campusData.findByPk(req.params.id)
        res.send(campus)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
    } catch (error) {
        res.send(error.message)
    }
})

        // const campus = await campusModel.create({
        //     name: "Brooklyn College",
        //     address: "2900 Bedford Ave, Brooklyn, NY 11210",
        //     description: "Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus."
        // })


module.exports = router;