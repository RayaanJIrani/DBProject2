const knex = require('../database/knex');

const Allocation = 'Parking_allocation';

const makeAllocation = async (Employee_id, Fan, Parking_spot_id) => {
    console.log("Employee_id", Employee_id);
    console.log("Fan", Fan);
    console.log("Parking_spot_id", Parking_spot_id);
    
    const query = knex(Allocation).insert({Parking_spot_id, Fan, Employee_id});
    const result = await query;
    return result;
}

const getAllocation = async(Allocation_id) => {
    const query = knex(Allocation).where({id : Allocation_id}).select('*');
    const result = await query;
    return result;
}

const deleteAllocation = async (allocation_id) => {
    const query = knex(Allocation).where({id : allocation_id}).del();
    const result = await query;
    return result;
}


module.exports = {
    makeAllocation,
    getAllocation,
    deleteAllocation
}