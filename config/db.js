const sequelize = require("sequelize");

const DB= new sequelize('d9dvf89n6pet2n','pybuxumzfqbpti','aace9a0f9828d96f8412d2e403a481a7aa890951d35cf094243aef1e95596f25',{
    host: 'ec2-3-230-106-126.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
});

module.exports = DB