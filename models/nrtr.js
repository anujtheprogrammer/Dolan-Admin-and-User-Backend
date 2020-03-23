const sequelize = require("sequelize")
const db = require("../config/db")
const nrtr = db.define('normrtreferences',{
    CatID:{
        type: sequelize.INTEGER
    },
    SID:{
        type: sequelize.INTEGER
    },
    createdBy:{
        type: sequelize.INTEGER
    },
    updatedBy:{
        type:sequelize.INTEGER
    },
    Status:{
        type: sequelize.BOOLEAN
    }
});

module.exports = nrtr;