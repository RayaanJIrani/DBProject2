const express = require('express');
const users = require('../models/users');

/*
 * https://expressjs.com/en/guide/routing.html#express-router
 * 
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();


//need to add authentication to this route
router.get('/session', async (req, res, next) => { //was initally /current
    try {
        const user = req.user;
        const result = await User.findUserByUsername(user.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.post('/account', async (req, res, next) => { //was initally just '/'. Makes new account
    try {
        const body = req.body;
        console.log(body);
        const result = await users.createNewUser(body.username, body.password, body.entryPointLot, body.entryPointEevnt);
        res.status(201).json(result);
        //need to add check if payload insufficient
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;