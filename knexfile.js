// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        debug: true,
        connection: {
            host : '127.0.0.1',
            port : 3306,
            user : 'admin', // Westley, you'll need to change this to your username
            password : 'password', //same thing for password here
            insecureAuth: true,
            database : 'stadium_project'
        }
    }
};