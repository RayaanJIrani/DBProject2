const express = require('express');
const UserController = require('../controllers/users');
const auth = require('../middleware/auth');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * 
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();

//need to add authentication to this route
router.get('/session',async (req, res, next) => { //was initally /current and is now the get session route
    try {
        /*
        const user = req.user;
        const result = await User.findUserByUsername(user.username);
        res.status(201).json(result);
        */
    } catch (err) {
        console.error('Server side error:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.post('/session', async (req, res, next) => { //this is the post /session route
    try {
        const body = req.body;
        
        const result = await UserController.authenticateEmployeeUser(body.username, body.password);
        if(result === null) {
            res.status(401).json({
                message: 'Invalid credentials'
            });
        } else {
            res.status(200).json(result);
        }
        //need to add a 401 error code for invalid credentials
    } catch (err) {
        console.error('A server side error occured:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;