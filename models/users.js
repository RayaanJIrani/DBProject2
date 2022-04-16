const knex = require('../database/knex');
const bcrypt = require('bcrypt');

const USER_TABLE = 'Employee';

const createNewUser = async (username, password,entryPoint) => {
    if(!username || !password) {
        return {
            success: false,
            message: 'Username and password are required'
        }
    }
    console.log('Raw password:', password);
    const salt = await bcrypt.genSalt(10);
    console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password', hashedPassword);

    const query = knex(USER_TABLE).insert({ username, password: hashedPassword, Entry_Point_id : entryPoint });
    console.log('Raw query for createNewUser:', query.toString());
    result = await query;
    result['success'] = true;
    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(USER_TABLE).where({ username });
    const result = await query;
    return result;
}

const authenticateUser = async (username, password) => {
    const users = await findUserByUsername(username);
    console.log('Results of users query', users);
    if (users.length === 0) {
        console.error(`No users matched the email: ${username}`);
        return null;
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        delete user.password;
        return user;
    }
    return null;
}


module.exports = {
    createNewUser,
    findUserByUsername,
    authenticateUser
};