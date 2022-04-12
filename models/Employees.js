const knex = require('../database/knex');

const Emplpyee_table = 'Employee';

const findUserByUsername = async (username) => {
    const query = knex(Emplpyee_table).where({ username });
    const result = await query;
    return result;
}

module.exports = {
    findUserByUsername
};