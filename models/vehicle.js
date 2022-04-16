const knex = require('../database/knex');

const getVehicle = async (DL_id) => {
    const result = await knex('Fan').select('*').where('DL_id', DL_id);
    return result;
}

const createVehicle = async (name,DL_id,type,license_plate) => {
    is_disables = false;
    const result = await knex('Fan').insert({
        name,
        is_disables, //none of our fans are disabled
        DL_id,
        Vehicle_type: type,
        license_plate
    })
}

module.exports = {
    getVehicle,
    createVehicle
}