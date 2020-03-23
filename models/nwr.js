const sequelize = require("sequelize")
const DB = require("../config/db")
const nwr = DB.define('normalwallreferences',{
    createdBy:{
        type:sequelize.INTEGER
    },
    updatedBy:{
        type:sequelize.INTEGER
    },
    Status:{
        type:sequelize.BOOLEAN
    },
    CatID:{
        type:sequelize.INTEGER
    },
    SID:{
        type:sequelize.INTEGER
    }
});

module.exports = nwr;