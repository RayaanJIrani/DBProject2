const allocationModel = require('../models/allocation.js');
const employeeModel = require('../models/Employees.js');
const vehicleModel = require('../models/vehicle.js');
const spotModel = require('../models/spots.js');

const checkIfVehicleExists = async (DL_id) => {
    if(DL_id == null) {
        return false;
    }
    //returns the number of vehickes with that vehicle ID
    const num = await vehicleModel.getVehicle(DL_id);
    if (num.length === 0) {
        return false;
    }
    return true;
}

const createVehicle = async (name,DL_id,type,license_plate) => {
    //checks if any of the parameters are empty
    if (name == null || DL_id == null || type == null || license_plate == null) {
        return {"Error": "Incorrect Inputs Provided"}; //this produces the error message
    }
    result = await vehicleModel.createVehicle(name,DL_id,type,license_plate);
    result["Error"] = "bskbfdbf"; //makes sure that the error is empty
    return result;
}

const checkIfSpotExists = async(spotId) => {
    if(spotId == null) {
        return false;
    }
    //returns the number of spots with that spot ID
    const num = await spotModel.getSpot(spotId);
    if (num.length === 0) {
        return false;
    }
    return true;
}

const checkIfSpotIsFree = async(spotId) => {
    if(spotId == null) {
        return false;
    }
    //sees if spto with spot ID has the is_used property to free
    const num = await spotModel.getSpot(spotId);
    if (num[0].is_used === 0) {
        return true;
    }
    return false;
}

const makeAllocation = async(DL_id,spotId, employee_id) => {
    //gets the employee info from the token passed in. To do this, I need to make a call to the session route
  //  const employee_id = await employeeModel.findUserByUsername(username)[0].employee_id;
    const allocationID = await allocationModel.makeAllocation(employee_id, DL_id,spotId);
    const result = await allocationModel.getAllocation(allocationID);
    return result[0];
    
}

const checkIfAllocationExists = async (allocation_id) => {
    if(allocation_id == null) {
        return false;
    }
    //returns the number of allocations with that allocation ID
    const num = await allocationModel.getAllocation(allocation_id);
    if (num.length === 0) {
        return false;
    }
    return true;
}

const deleteAllocation = async(allocation_id) => {
    result = await allocationModel.deleteAllocation(allocation_id);

}

const swapVehicle = async(allocation_id,DL_id) => {
    await allocationModel.swapVehicle(allocation_id,DL_id);
    const result = await allocationModel.getAllocation(allocation_id);
    return result[0];
}

module.exports = {
    checkIfVehicleExists,
    createVehicle,
    checkIfSpotExists,
    checkIfSpotIsFree,
    makeAllocation,
    checkIfAllocationExists,
    deleteAllocation,
    swapVehicle
}