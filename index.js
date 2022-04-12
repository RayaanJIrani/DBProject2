//This is effectively the main file for the application.
//Look into the index.js of the DB/GUI project to compare to see maybe if we can squeeze a logger out of that.

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


//import route handlers
const sessionRoutes = require('./routes/session');
const userRoutes = require('./routes/user');
//const spotRoutes = require('./routes/spot'); add this in later when we have the spot route

//import middleware
const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth.js');
//We'll have to add in the middleware that does the logging when we do it.

// Start by defining the express app instance
const app = express();
const port = 3000;

// On every request, this gets called first. This is the first step in our "middleware chain".
// We put this before anything else because we know our route handlers are going to need connections
// to the database
app.use(bodyParser.json());


//This tells the app to use the routes we've imported.
//In the case when we need to verify using middleware, we can do that here.
app.use(sessionRoutes);
app.use(userRoutes);
//app.use(spotRoutes); //need to add way to verify user is logged in.

// Now that we've configured the app, make it listen for incoming requests
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});



