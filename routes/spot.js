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
        const result = await employeeModel.findUserByUsername(username); //gets employee info given the username
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




//add authentication to this route
router.get('/spots', async  (req, res, next) => {
    try {
        const result = await spotsController.getSpots(req.query.stadium, req.query.lot, req.query.available);
      //  const result = await spots.getSpots(req.query);
        res.status(200).json("Hello");
    } catch (err) {
        console.error('Server side error:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

module.exports = router;
