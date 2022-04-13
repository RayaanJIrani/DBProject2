const express = require('express');
//const spotsController = require('../controllers/spots');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 *
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();

//need to add authentication to this route
router.get('/session',async (req, res, next) => { //was initally /current and is now the get session route
    //This route effectivly takes the info from the token, and then calls the find user by username function to get all of the account info
    try {

        /*
        const user = req.user;
        const result = await User.findUserByUsername(user.username);
        res.status(201).json(result);
        */
        res.status(201).json("It works");

    } catch (err) {
        console.error('Server side error:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//add authentication to this route
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

module.exports = router;
