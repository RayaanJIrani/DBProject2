const knex = require('../database/knex');

const getSpots = async (filters, stadiumParking) => {
    return knex('Parking_spot')
        .where(filters) // this uses the filter function to filter the spots based on the selected cirtia
        .whereIn('parking_lot', stadiumParking) // this uses the stadiumParking function to filter the spots based on the stadiumParking
        .select('*');
}

//const getParkingLots = async()
module.exports = {
    getSpots
}