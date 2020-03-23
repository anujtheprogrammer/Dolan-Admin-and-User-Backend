const sequelize = require("sequelize");
const db = require("../config/db");
const user = db.define('users', {
    Username:{
        type:sequelize.STRING
    },
    Password:{
        type:sequelize.STRING
    }  
});

module.exports = user