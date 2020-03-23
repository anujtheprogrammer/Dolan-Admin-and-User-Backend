const sequelize = require("sequelize")
const db = require("../config/db")
const ringtone = db.define('rtsources',{
    Name:{
        type:sequelize.STRING
    },
    Path:{
        type:sequelize.STRING
    },
    Author:{
        type:sequelize.INTEGER
    },
    Downloads:{
        type:sequelize.INTEGER
    },
    createdBy:{
        type:sequelize.INTEGER
    },
    updatedBy:{
        type:sequelize.INTEGER
    },
    Status:{
        type:sequelize.BOOLEAN
    }
});

module.exports = ringtone