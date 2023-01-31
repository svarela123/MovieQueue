const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    MovieList: sequelize.define("movie_list", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNullL: false,
            primaryKey: true
        },
        movieName: DataTypes.STRING,
        imageUrl: DataTypes.TEXT
    })
}