// for controllers folder

const jwt = require('jsonwebtoken');
const User = require('../models/users');
const Employee = require('../models/employees');

const accessTokenSecret = 'mysupercoolsecret';

const authenticateEmployeeUser = async (username, password) => {
    const user = await User.authenticateEmployee(username, password);
    if (user === null) {
        return user;
    }


const employees = await Employee.findUserByUsername(username);
console.log('Employees', employees);
const accessToken = jwt.sign({...employees[0], claims: ['first_name']}, accessTokenSecret);
 
return accessToken;

}

module.exports = {
    authenticateEmployeeUser
};