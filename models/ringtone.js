const sequelize = require("sequelize")
const db = require("../config/db")
const ringtone = db.define('rtsources',{
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

module.exports = ringtone