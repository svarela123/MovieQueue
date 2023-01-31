require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {Friend} = require('./models/friend')
const {MovieList} = require('./models/movieList')
const {sequelize} = require('./util/database')

const {register, login} = require('./controllers/authCtrl')


const app = express()

app.use(express.json())
app.use(cors())

Friend.belongsTo(User, {
    as: 'befrienderId'
})

Friend.belongsTo(User, {
    as: 'befriendedId'
})

MovieList.belongsTo(User, {
    as: 'adderId'
})

MovieList.belongsTo(User, {
    as: 'recipientId'
})

app.post('/api/register', register)
app.post('/api/login', login)

// app.get('/api/frienddetail')

// app.get('/api/movielist')


sequelize.sync()
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))