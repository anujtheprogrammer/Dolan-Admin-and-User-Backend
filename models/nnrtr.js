const sequalize = require("sequelize")
const DB = require("../config/db")

const nnrtr = DB.define("nNRTrefrences",{
    CatID:{
        type:sequalize.INTEGER
    },
    SID:{
        type:sequalize.INTEGER
    },
    createdBy:{
        type:sequalize.INTEGER
    },
    updatedBy:{
        type:sequalize.INTEGER
    },
    Status:{
        type:sequalize.BOOLEAN
    }
});

module.exports = nnrtr;