const express = require('express');
const spotsController = require('../controllers/spots');
const employeeModel = require('../models/Employees');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 *
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();


router.get('/session',async (req, res, next) => { //was initally /current and is now the get session route
    //This route effectivly takes the info from the token, and then calls the find user by username function to get all of the account info
    try {
        const username = req.user.username;
        const result = await employeeModel.findUserByUsername(username);
        /*
        const user = req.user;
        const result = await User.findUserByUsername(user.username);
        res.status(201).json(result);
        */
        res.status(201).json(result[0]);

    } catch (err) {
        console.error('Server side error:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});


router.get('/spot', async  (req, res, next) => {
    res.status(201).json("It works");
});


//add authentication to this route
router.get('/spots', async  (req, res, next) => {
    try {
      //  const result = await spots.getSpots(req.query);
        res.status(200).json("Hello");
    } catch (err) {
        console.error('Server side error:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});


router.post('/spots', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        //checks to see if fan does not exist
        if(result != result){
            result = await users.createNewVehicle(body.Vehicle_type);
        result1 = await users.createSpotID(body.id, body.Vehicle_type);
        }
        if(result.success) {
            //if it is, it get's all the info about the user from the employe record
            res.status(201).json(result1);
        } else {
            //if it isn't, it sends back an error message
            res.status(400).json(result);
        }
        //need to add check if payload insufficient
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

});

module.exports = router;
