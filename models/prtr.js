const sequelize = require("sequelize")
const db = require("../config/db")
const prtr = db.define('poprtreferences',{
    CatID:{
        type:sequelize.INTEGER
    },
    NRTRID:{
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
    
})

module.exports = prtr