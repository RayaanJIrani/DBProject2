const knex = require('../database/knex');


const getSpot = async (spotID) => {
    return knex('Parking_spot').where('id',spotID);
}

const getSpots = async (filters, stadiumParking) => {
    return knex('Parking_spot')
        .where(filters) // this uses the filter function to filter the spots based on the selected cirtia
        .whereIn('parking_lot', stadiumParking) // this uses the stadiumParking function to filter the spots based on the stadiumParking
        .select('*');
}

const getParkingLots = async(filter) => {
    return knex('Parking_lot') //returns the ids of all the parking lots
        .where(filter)
        .select('id'); //only retusn the id of the parking lot
}
//const getParkingLots = async()

const createNewVehicle = async (Vehicle_type) => {
    if(!Vehicle_type) {
        const query = knex('Fan').insert({ Vehicle_type });
        result = await query;
        result['success'] = true;
        return result;
       
    }

};


const createSpotID = async (id, Vehicle_type) => {
        const query = knex('Parking_allocation').insert({id, Vehicle_type});
        const result = await query;
        return result;
};

    
module.exports = {
        getSpot,
        getSpots,
        getParkingLots,
        createSpotID,
        createNewVehicle
}