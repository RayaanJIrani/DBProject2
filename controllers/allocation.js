const allocationModel = require('../models/allocation.js');
const employeeModel = require('../models/Employees.js');
const vehicleModel = require('../models/vehicle.js');
const spotModel = require('../models/spots.js');

const checkIfVehicleExists = async (DL_id) => {
    //returns the number of vehickes with that vehicle ID
    const num = await vehicleModel.getVehicle(DL_id);
    if (num.length === 0) {
        return false;
    }
    return true;
}

const createVehicle = async (name,DL_id,type,license_plate)=> {
    //checks if any of the parameters are empty
    if (name == null || DL_id == null || type == null || license_plate == null) {
        return {"Error": "Incorrect Inputs Provided"}; //this produces the error message
    }
    result = await vehicleModel.createVehicle(name,DL_id,type,license_plate);
    result["Error"] = ""; //makes sure that the error is empty
    return result;
}

const checkIfSpotExists = async(spotId) => {
    //returns the number of spots with that spot ID
    const num = await spotModel.getSpot(spotId);
    if (num.length === 0) {
        return false;
    }
    return true;
}

const checkIfSpotIsFree = async(spotId) => {
    //sees if spto with spot ID has the is_used property to free
    const num = await spotModel.getSpot(spotId);
    if (num[0].is_used === 0) {
        return true;
    }
    return false;
}

const makeAllocation = async(DL_id,spotId, username) => {
    //gets the employee info from the token passed in. To do this, I need to make a call to the session route
    const employee_id = await employeeModel.findUserByUsername(username).employee_id;
    const result = await allocationModel.makeAllocation(DL_id,spotId,employee_id);
    
}

module.exports = {
    checkIfVehicleExists,
    createVehicle,
    checkIfSpotExists,
    checkIfSpotIsFree,
    makeAllocation
}