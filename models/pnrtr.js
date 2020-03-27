const sequalize = require("sequelize")
const DB = require("../config/db")

const pnrtr = DB.define("pNRTreferences",{
    CatID:{
        type:sequalize.INTEGER
    },
    NNRTRID:{
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

module.exports = pnrtr;