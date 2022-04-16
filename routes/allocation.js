const express = require('express');
const controller = require('../controllers/allocation.js');

const router = express.Router();

router.post('/allocation', async (req, res, next) => { //was initally POST /Spots changes to POST /allocation
    try {
        const body = req.body;
        //check is the vehicle already exists
        const vehicleDoesExist = await controller.checkIfVehicleExists(body.DL_id);
        if(!vehicleDoesExist){
            //creates a new vehicle based on info
            //if not enough info about vehicle is given, will return with an error
            const vehicle = await controller.createVehicle(body.name,body.DL_id,body.type,body.license_plate);
            if(vehicle["Error"] == "Incorrect Inputs Provided"){
                res.status(400).json({
                    "Error": "Incorrect Inputs Provided"
                });
            }
        } 
        //now we check if the spot exists and if it is free
        const spotDoesExist = await controller.checkIfSpotExists(body.spotId);
        if(!spotDoesExist){
            //sends and error message
            res.status(400).json({
                "Error": "Spot does not exist"
            });
        }
        const spotIsFree = await controller.checkIfSpotIsFree(body.spotId);
        if(!spotIsFree){
            //sends and error message
            res.status(400).json({
                "Error": "Spot is not free"
            });
        }
        //now we make the allocation
        const allocation = await controller.makeAllocation(body.DL_id,body.spotId, req.user.username);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

});

router.put('/allocation/:allocation_id', async (req, res, next) => {
    try {
        //tries the update the allocation
    } catch (err) {
        console.error('Failed to update the allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

});


router.delete('/allocation/:allocation_id', async (req, res, next) => {
    try {
        //tries to delete the allocation
    } catch (err) {
        console.error('Failed to delete the allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

});

module.exports = router;