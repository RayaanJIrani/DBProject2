const express = require('express');
const UserController = require('../controllers/users'); 

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * 
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        
        const result = await req.models.user.authenticateEmployee(body.username, body.password);
        res.status(201).json(result);
        //need to add a 401 error code for invalid credentials
    } catch (err) {
        console.error('Failed to authenticate user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;