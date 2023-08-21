const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const methodOverride = require('method-override');

//middleware function
const middleware = (app) => {
    console.log('middleware function got hit!')
    app.use(methodOverride('_method'))
    app.use(morgan('tiny'))
    app.use(express.urlencoded({ extended: true}))
    app.use(express.static('public'))
    app.use(express.json())
}

//module export
module.exports = middleware