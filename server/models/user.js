const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    User: sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNullL: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    })
}