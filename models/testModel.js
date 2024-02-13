const Sequelize = require('sequelize');
const { sequelize } = require('../db/db');


const Test = sequelize.define('test', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Test;