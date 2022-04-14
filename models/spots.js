const knex = require('../database/knex');
const USER_TABLE = 'Fan';

const createNewVehicle = async (Vehicle_type) => {
    if(!Vehicle_type) {
        const query = knex(USER_TABLE).insert({ Vehicle_type });
        result = await query;
        result['success'] = true;
        return result;
       
    }

};

const USER_TABLE1 = 'Parking_allocation';

const createSpotID = async (id, Vehicle_type) => {
        const query = knex(USER_TABLE1).insert({id, Vehicle_type});
        const result = await query;
        return result;

    
    module.exports = {
        createSpotID,
        createNewVehicle
    };
    
}