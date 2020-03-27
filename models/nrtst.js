const sequelize = require("sequelize")
const db = require("../config/db")
const nrtst = db.define('notringtonesources',{
    Name:{
        type:sequelize.STRING
    },
    Path:{
        type:sequelize.STRING
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
    },
    Duration:{
        type:sequelize.INTEGER
    },
    AlbumArt:{
        type:sequelize.STRING
    },
    About:{
        type:sequelize.STRING
    }
});

module.exports = nrtst