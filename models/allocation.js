const knex = require('../database/knex');

const Allocation = 'makeAllocation';

const makeAllocation = async (id, Employee_id, Fan, Parking_spot_id) =>{
    const query = knex(Allocation).insert({id ,Employee_id, Fan, Parking_spot_id});
    const result = await query;
    return result;
}


module.exports = {
    makeAllocation
}