//this imports the createError dependency
// const createError = request('http-errors');
//this imports the express dependency
//express is a framework used to build servers with js
const express = require('express')
require('dotenv').config()
// imports the path module(which we use later)
const path = require('path');
//this imports the cookieparser module(don't need to worry about that for now)
// this module is NOT required for express to do its thing
// const cookieParser = require('cookie-parser');
//this logs our request to the terminal
// const logger = require('morgan');
const middleware = require('./utils/middleware')

const skills = require('./models/skills')
//this is where we import our routes
//our routes determine the request/response cycle of our app.
//when i hit a route it should run a controller
// which interacts with my models, from there the route determines what view to serve the user.

// request -> route -> controller -> models -> controller -> route -> view(response)
//REQUEST -> hits a route which runs a controller 
//RESPONSE -> controller collects data(from models) and serves a view
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// this calls the express function and saves the value(a server) to the variable app
const app = express()

// this tells express to look in our views directory for ejs files(this two lines combined)

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// this is our middleware section
// this middleware uses the morgan dependency and sets an option('dev')
// app.use(logger('dev'));
middleware(app)

// this tells our express server to allow receiving requests and sending responses as json
// app.use(express.json());

// don't worry about this line, just know that you need it
// app.use(express.urlencoded({ extended: false}));

//this parses cookies from the browser(all you need to know for now)
// app.use(cookieParser());

// this says 'look for the public folder from which we can serve static files'
// static files don't change over time. They can be images, CSS stylesheets etc
// app.use(express.static(path.join(__dirname, 'public')));


// this is where we register our routes.
// this says 'prepend all routes in the route files with the first argument'
// that means all routes in the index router will begin with a slash and that's it

///Routes///
app.get('/', (req, res) => {
    console.log('this are the skills', skills)
    res.render('layout.ejs')
})

// server listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('el servidor esta corriendo!')
})


///END