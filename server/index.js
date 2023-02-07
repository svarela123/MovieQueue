require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {Friend} = require('./models/friend')
const {MovieList} = require('./models/movieList')
const {sequelize} = require('./util/database')

const {register, login} = require('./controllers/authCtrl')
const {addFriend, getUsers, getUserFriends, getFriendDetails} = require('./controllers/friendDetailCtrl')
const {getMovieList, addToFriendsList} = require('./controllers/movieListCtrl')


const app = express()

app.use(express.json())
app.use(cors())

Friend.belongsTo(User, {
    as: 'befriender'
})

Friend.belongsTo(User, {
    as: 'befriended'
})

MovieList.belongsTo(User, {
    as: 'adder'
})

MovieList.belongsTo(User, {
    as: 'recipient'
})

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/users', getUsers)
app.post('/api/friendlist', addFriend)
app.get('/api/friendlist/:userId', getUserFriends)

app.get('/api/movielist/:friendId', getMovieList)
app.post('/api/movielist', addToFriendsList)

app.get('/api/frienddetail/:userId', getFriendDetails)




sequelize.sync()
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))