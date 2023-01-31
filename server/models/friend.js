const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Friend: sequelize.define("friend", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNullL: false,
            primaryKey: true
        },
    })
}