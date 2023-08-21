const express = require('express')
const skills = require('../models/skills')

// callling the api
const axios = require('axios')


/// router
 const router = express.Router()

 // index route
router.get('/', (req, res) => {
    res.json(skills)
})

 module.exports = router